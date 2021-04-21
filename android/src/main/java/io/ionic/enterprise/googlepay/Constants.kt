package io.ionic.enterprise.googlepay

object Constants {
    /**
     * Arbitrarily-picked constant integer you define to track a request for payment data activity.
     *
     * @value #LOAD_PAYMENT_DATA_REQUEST_CODE
     */
    const val LOAD_PAYMENT_DATA_REQUEST_CODE = 1592

    const val ERROR_NOT_INITIALIZED = "GOOGLE_PAY_ERROR: Plugin Not Initialized, Call initGooglePayClient() First!"
    const val ERROR_USER_CANCELED = "GOOGLE_PAY_ERROR: User Canceled"
    const val ERROR_PAYMENT_DATA_PARSE_FAILURE = "GOOGLE_PAY_ERROR: Payment Data Parse Error"
    const val ERROR_GOOGLE_PAY_ACTIVITY_ERROR_RESULT = "GOOGLE_PAY_ERROR: Activity Error"
    const val ERROR_INVALID_PARAMETERS = "GOOGLE_PAY_ERROR: Invalid User-Supplied Params"
    const val ERROR_UNABLE_TO_BUILD_PAYMENT_REQUEST = "GOOGLE_PAY_ERROR: Unable To Create Payment Request"
    const val ERROR_UNABLE_TO_BUILD_REQUEST_DATA = "GOOGLE_PAY_ERROR: Unable To Build Request Data"
}