package io.ionic.enterprise.googlepay

class GooglePayErrors {
  companion object {
    const val ERR_UNKNOWN = 0
    const val ERR_NOT_INITIALIZED = 1
    const val ERR_USER_CANCELED = 3
    const val ERR_PAYMENT_DATA_PARSE_FAILURE = 4
    const val ERR_GOOGLE_PAY_ACTIVITY_ERROR_RESULT = 5
    const val ERR_INVALID_PARAMETERS = 6
    const val ERR_UNABLE_TO_BUILD_PAYMENT_REQUEST = 7
    const val ERR_UNABLE_TO_BUILD_REQUEST_DATA = 8

    fun getGooglePayError(code: Int, ex: Exception?): GooglePayError {
      var message = ""

      when (code) {
        GooglePayErrors.ERR_NOT_INITIALIZED ->
          message = "Plugin Not Initialized, Call initGooglePayClient() First!"
        GooglePayErrors.ERR_USER_CANCELED ->
          message = "User Canceled"
        GooglePayErrors.ERR_PAYMENT_DATA_PARSE_FAILURE ->
          message = "Payment Data Parse Error"
        GooglePayErrors.ERR_GOOGLE_PAY_ACTIVITY_ERROR_RESULT ->
          message = "Activity Error"
        GooglePayErrors.ERR_INVALID_PARAMETERS ->
          message = "Invalid User-Supplied Params: "
        GooglePayErrors.ERR_UNABLE_TO_BUILD_PAYMENT_REQUEST ->
          message = "Unable To Create Payment Request: "
        GooglePayErrors.ERR_UNABLE_TO_BUILD_REQUEST_DATA ->
          message = "Unable To Build Request Data: ";
        GooglePayErrors.ERR_UNKNOWN ->
          message = "Unknown error: "
      }

      if (message.isEmpty()) {
        message = "Unknown error: "
      }

      if (ex != null) {
        message += ex.message;
      }

      return GooglePayError(message, code)
    }
  }
}

data class GooglePayError(val message: String, val code: Int)
