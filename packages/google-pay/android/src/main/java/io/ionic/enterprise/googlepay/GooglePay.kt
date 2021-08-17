package io.ionic.enterprise.googlepay

import android.content.Intent
import android.util.Log
import com.getcapacitor.*
import com.google.android.gms.wallet.WalletConstants

@NativePlugin(
    requestCodes=[Constants.LOAD_PAYMENT_DATA_REQUEST_CODE]
)
class GooglePay : Plugin() {
    private var pluginRef: GooglePayPlugin = GooglePayPlugin()
    private var caster: TypeCasting = TypeCasting()
    private var initComplete: Boolean = false
    private var callbackId: String = ""

    @Override
    override fun handleOnActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        super.handleOnActivityResult(requestCode, resultCode, data)
        val sCall = getBridge().getSavedCall(callbackId) ?: return
        getBridge().releaseCall(sCall)
        pluginRef.handlePaymentResult(sCall, requestCode, resultCode, data)
    }

    @PluginMethod
    fun initGooglePayClient(call: PluginCall) {
        val requestedEnv = call.getString("environment")
        val env = if (requestedEnv == "PRODUCTION") WalletConstants.ENVIRONMENT_PRODUCTION else WalletConstants.ENVIRONMENT_TEST
        val version = call.getObject("version")
        val success = pluginRef.initPaymentClient(getBridge().activity, env, caster.toVersion(version))
        initComplete = success
        call.resolve(JSObject().apply {
            put("isReady", success)
        })
    }

    @PluginMethod
    fun canMakePayments(call: PluginCall) {
        if (!initComplete) {
            val err = GooglePayErrors.getGooglePayError(GooglePayErrors.ERR_NOT_INITIALIZED, null)
            call.reject(err.message, err.code.toString())
            return
        }
        try {
            pluginRef.canMakePayments(call.getArray("allowedPaymentMethods")){ result ->
                val ret = JSObject().apply {
                    put("canMakePayments", result)
                }
                call.resolve(ret)
            }
        } catch (e: Exception) {
            Log.w("EXCEPTION THROWN!", e)
            val err = GooglePayErrors.getGooglePayError(GooglePayErrors.ERR_INVALID_PARAMETERS, e)
            call.reject(err.message, err.code.toString())
        }
    }

    @PluginMethod
    fun makePaymentRequest(call: PluginCall) {
        if (!initComplete) {
            val err = GooglePayErrors.getGooglePayError(GooglePayErrors.ERR_NOT_INITIALIZED, null)
            call.reject(err.message, err.code.toString())
            return
        }
        getBridge().saveCall(call)
        callbackId = call.callbackId
        try {
            pluginRef.makePaymentRequest(
                call,
                getBridge().activity,
                call.getArray("allowedPaymentMethods"),
                call.getObject("transactionInfo"),
                call.getObject("merchantInfo")
            )
        } catch (e: Exception) {
            Log.w("EXCEPTION THROWN!", e)
            val err = GooglePayErrors.getGooglePayError(GooglePayErrors.ERR_INVALID_PARAMETERS, e)
            call.reject(err.message, err.code.toString())
        }
    }
}
