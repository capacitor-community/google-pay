package io.ionic.enterprise.googlepay

import android.app.Activity
import android.content.Intent
import android.util.Log
import com.getcapacitor.JSObject
import com.getcapacitor.PluginCall
import com.google.android.gms.common.api.ApiException
import com.google.android.gms.wallet.*
import org.json.JSONArray
import org.json.JSONException
import org.json.JSONObject
import java.lang.StringBuilder

class GooglePayPlugin {

    private lateinit var paymentsClient: PaymentsClient
    private lateinit var version: JSONObject

    fun initPaymentClient(activity: Activity, env: Int, ver: GooglePayVersion): Boolean {
        return try {
            val walletOptions = Wallet.WalletOptions.Builder()
                    .setEnvironment(env)
                    .build()
            paymentsClient = Wallet.getPaymentsClient(activity, walletOptions)
            version = JSONObject().apply {
                put("apiVersion", ver.apiVersion)
                put("apiVersionMinor", ver.apiVersionMinor)
            }
            true
        } catch (e: Error) {
            Log.w("EXCEPTION THROWN!", e)
            false
        }
    }

    fun canMakePayments(allowedPaymentMethods: JSONArray, onComplete: (Boolean) -> Unit) {
        val isReadyToPayJson = getReadyToPayJSON(allowedPaymentMethods) ?: return onComplete(false)
        val request = IsReadyToPayRequest.fromJson(isReadyToPayJson.toString()) ?: return onComplete(false)

        val task = paymentsClient.isReadyToPay(request)
        task.addOnCompleteListener { completedTask ->
            try {
                completedTask.getResult(ApiException::class.java)?.let(onComplete)
            } catch (exception: ApiException) {
                Log.w("EXCEPTION THROWN!", exception)
                onComplete(false)
            }
        }
    }

    fun makePaymentRequest(call: PluginCall, activity: Activity, paymentRequest: PaymentRequest) {
        val paymentData = paymentRequest.getRequest(version)
        if (paymentData == null) {
            val err = GooglePayErrors.getGooglePayError(GooglePayErrors.ERR_UNABLE_TO_BUILD_REQUEST_DATA, null)
            call.reject(err.message, err.code.toString())

            return
        }
        val request = PaymentDataRequest.fromJson(paymentData.toString())

        if (request != null) {
            AutoResolveHelper.resolveTask(paymentsClient.loadPaymentData(request), activity, Constants.LOAD_PAYMENT_DATA_REQUEST_CODE)
        } else {
            val err = GooglePayErrors.getGooglePayError(GooglePayErrors.ERR_UNABLE_TO_BUILD_PAYMENT_REQUEST, null)
            call.reject(err.message, err.code.toString())
            return
        }
    }

    fun handlePaymentResult(call: PluginCall, requestCode: Int, resultCode: Int, data: Intent?) {
        when (requestCode) {
            Constants.LOAD_PAYMENT_DATA_REQUEST_CODE -> {
                when (resultCode) {
                    Activity.RESULT_OK -> {
                        data?.let { intent -> PaymentData.getFromIntent(intent)?.let { paymentData ->
                            val paymentInfo = paymentData.toJson() ?: return
                            try {
                                val ret = JSObject().apply {
                                    put("paymentResult", JSObject(paymentInfo))
                                }
                                call.resolve(ret)
                            } catch (e: JSONException) {
                                val err = GooglePayErrors.getGooglePayError(GooglePayErrors.ERR_PAYMENT_DATA_PARSE_FAILURE, e)
                                call.reject(err.message, err.code.toString())
                            }
                        } }
                    }
                    Activity.RESULT_CANCELED -> {
                        // User Canceled Payment
                        val err = GooglePayErrors.getGooglePayError(GooglePayErrors.ERR_USER_CANCELED, null)
                        call.reject(err.message, err.code.toString())
                    }
                    AutoResolveHelper.RESULT_ERROR -> {
                        AutoResolveHelper.getStatusFromIntent(data)?.let { status ->
                            val sb = StringBuilder().apply {
                                val err = GooglePayErrors.getGooglePayError(GooglePayErrors.ERR_GOOGLE_PAY_ACTIVITY_ERROR_RESULT, null)
                                append(err.message)
                                append(" - ")
                                append(status.statusCode.toString())
                                append(": ")
                                append(status.statusMessage ?: "")
                            }
                            call.reject(sb.toString())
                        }
                    }
                }
            }
        }
    }

    private fun getReadyToPayJSON(allowedPaymentMethods: JSONArray): JSONObject? {
        return try {
            version.apply {
                put("allowedPaymentMethods", allowedPaymentMethods)
            }
        } catch (e: JSONException) {
            Log.w("EXCEPTION THROWN!", e)
            null
        }
    }
}
