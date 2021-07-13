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

    @Override
    override fun handleOnActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        super.handleOnActivityResult(requestCode, resultCode, data)

        val sCall = savedCall ?: return
        pluginRef.handlePaymentResult(sCall, requestCode, resultCode, data)
    }

    @PluginMethod
    fun initGooglePayClient(call: PluginCall) {
        val requestedEnv = call.getString("environment")
        val env = if (requestedEnv == "PRODUCTION") WalletConstants.ENVIRONMENT_PRODUCTION else WalletConstants.ENVIRONMENT_TEST
        val version = call.getObject("version")
        val success = pluginRef.initPaymentClient(getBridge().activity, env, caster.toVersion(version))
        initComplete = success
        call.success(JSObject().apply {
            put("ready", success)
        })
    }

    @PluginMethod
    fun canMakePayments(call: PluginCall) {
        if (!initComplete) {
            call.error(Constants.ERROR_NOT_INITIALIZED)
            return
        }
        try {
            pluginRef.canMakePayments(call.getArray("allowedPaymentMethods")){ result ->
                val ret = JSObject().apply {
                    put("canMakePayments", result)
                }
                call.success(ret)
            }
        } catch (e: Exception) {
            Log.w("EXCEPTION THROWN!", e)
            call.error(Constants.ERROR_INVALID_PARAMETERS)
        }
    }

    @PluginMethod
    fun makePaymentRequest(call: PluginCall) {
        if (!initComplete) {
            call.error(Constants.ERROR_NOT_INITIALIZED)
            return
        }
        saveCall(call)
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
            call.error(Constants.ERROR_INVALID_PARAMETERS)
        }
    }
}