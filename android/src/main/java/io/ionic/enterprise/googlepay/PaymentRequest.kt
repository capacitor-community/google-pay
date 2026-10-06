package io.ionic.enterprise.googlepay

import android.util.Log
import org.json.JSONArray
import org.json.JSONException
import org.json.JSONObject

class PaymentRequest(
  val allowedPaymentMethods: JSONArray,
  val transactionInfo: JSONObject,
  val merchantInfo: JSONObject,
  val emailRequired: Boolean?,
  val shippingAddressRequired: Boolean?,
  val shippingAddressParameters: JSONObject?,
  val shippingOptionRequired: Boolean?,
  val shippingOptionParameters: JSONArray?
) {
  fun getRequest(version: JSONObject): JSONObject? {
    return try {
      version.apply {
        put("allowedPaymentMethods", allowedPaymentMethods)
        put("transactionInfo", transactionInfo)
        put("merchantInfo", merchantInfo)
        put("emailRequired", emailRequired)
        put("shippingAddressRequired", shippingAddressRequired)
        put("shippingAddressParameters", shippingAddressParameters)
        put("shippingOptionRequired", shippingOptionRequired)
        put("shippingOptionParameters", shippingOptionParameters)
      }
    } catch (e: JSONException) {
      Log.w("EXCEPTION THROWN!", e)
      null
    }
  }
}


