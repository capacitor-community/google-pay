/**
 * The possible payment networks that you can accept through Google Pay.
 */
export enum GooglePayAllowedNetwork {
  /** American Express */
  AMEX = 'AMEX',
  /** Discover Card */
  DISCOVER = 'DISCOVER',
  /** Interac */
  INTERAC = 'INTERAC',
  /** Japan Credit Bureau */
  JCB = 'JCB',
  /** Mastercard */
  MASTERCARD = 'MASTERCARD',
  /** VISA */
  VISA = 'VISA',
}

/**
 * The possible methods supported to authenticate a transaction.
 */
export enum GooglePayAllowedAuthMethod {
  /**
   * This is associated with payment cards stored on file with the user's Google Account.
   * The returned payment data includes the user's Personal Account Number (PAN).
   */
  PAN_ONLY = 'PAN_ONLY',
  /**
   * This is associated with cards stored as Android device tokens.
   * The returned payment data includes a 3-D Secure (3DS) cryptogram.
   */
  CRYPTOGRAM_3DS = 'CRYPTOGRAM_3DS',
}

/**
 * The environment to run the Google Pay API on.
 */
export enum GooglePayEnvironment {
  /** Dummy payment environment that is suitable for testing transactions. */
  TEST = 'TEST',
  /** Used to accept transactions when a valid Google merchant ID is specified and configured on the domain. */
  PRODUCTION = 'PRODUCTION',
}

/**
 * A configuration object that defines which Google Pay API versions to use.
 */
export interface GooglePayVersion {
  /**
   * - Type: `0` | `1` | `2`
   *
   * The major API version to target. */
  apiVersion: 0 | 1 | 2;
  /**
   * - Type: `0` | `1` | `2`
   *
   * The minor API version to support. */
  apiVersionMinor: 0 | 1 | 2;
}

/** A object that specifies the gateway configured in the Google Payments Profile. */
export interface GooglePayPaymentProviderLookup {
  /**
   * - Type: `string`
   *
   * The gateway's identifier which is issued by Google.
   */
  gateway: string;
  /**
   * - Type: `string`
   *
   * The gateway account ID which is provided by the gateway.
   */
  gatewayMerchantId: string;
}

/** An object to configure the Google Pay account to receive chargeable payment information. */
export interface GooglePayTokenizationSpecification {
  /**
   * - Type: `PAYMENT_GATEWAY`
   *
   * The payment method tokenization type supported.
   *
   * @default `PAYMENT_GATEWAY`
   */
  type: 'PAYMENT_GATEWAY';
  /**
   * - Type: {@link GooglePayPaymentProviderLookup}
   *
   *  The payment gateway specific to the tokenization type.
   */
  parameters: GooglePayPaymentProviderLookup;
}

/** A configuration object that defines the allowable authorization methods and card networks */
export interface GooglePayPaymentMethodParameters {
  /**
   * - Type: {@link GooglePayAllowedAuthMethod}
   *
   * An array of authorization methods that are allowed to be used during the payment process.
   */
  allowedAuthMethods: GooglePayAllowedAuthMethod[];
  /**
   * - Type: {@link GooglePayAllowedNetwork}
   *
   * An array of card networks that are accepted for payment.
   */
  allowedCardNetworks: GooglePayAllowedNetwork[];

  /**
   * Set to true if you require a billing address. A billing address should only be requested if it's required to process the transaction. Additional data requests can increase friction in the checkout process and lead to a lower conversion rate.
   */
  billingAddressRequired?: boolean;

  /**
   * The expected fields returned if {@link GooglePayBillingAddressParameters} is set to true.
   */
  billingAddressParameters?: GooglePayBillingAddressParameters;
}

/**
 * This object allows you to set additional fields to be returned for a requested billing address.
 */
export interface GooglePayBillingAddressParameters {
  /**
   * Billing address format required to complete the transaction.
   */
  format?: GooglePayBillingAddressFormat;
  /**
   * Set to true if a phone number is required to process the transaction.
   */
  phoneNumberRequired?: boolean;
}

export enum GooglePayBillingAddressFormat {
  /** Name, country code, and postal code (default). **/
  Minimal = 'MIN',
  /** Name, street address, locality, region, country code, and postal code. **/
  Full = 'FULL',
}

/** An object that specifies payment methods that are supported by the Google Pay API and your website. */
export interface GooglePayPaymentMethod {
  /**
   * - Type: `CARD`
   *
   * The identifier for the supported payment type.
   *
   * @default `CARD`
   */
  type: 'CARD';
  /**
   * - Type: {@link GooglePayPaymentMethodParameters}
   *
   * The configuration parameters for defining the allowed payment methods.
   */
  parameters: GooglePayPaymentMethodParameters;
  /**
   * - Type: {@link GooglePayTokenizationSpecification}
   *
   * The Google Pay account configured to receive payments.
   *
   * @default `undefined`
   */
  tokenizationSpecification?: GooglePayTokenizationSpecification;
}

/** An object that describes a transaction, including its status, price, and locale. */
export interface GooglePayTransactionInfo {
  /**
   * - Type: `FINAL`
   *
   * The status of the transaction's price.
   *
   * @default `FINAL`
   */
  totalPriceStatus: 'FINAL';
  /**
   * - Type: `string`
   *
   * The total monetary value of the transaction with an optional decimal precision of two places.
   *
   * The format should follow the regex format: ^[0-9]+(\.[0-9][0-9])?$
   */
  totalPrice: string;
  /**
   * - Type: `string`
   *
   * The ISO 4217 alphabetic currency code.
   */
  currencyCode: string;
  /**
   * - Type: `string`
   *
   * The ISO 3166-1 alpha-2 country code where the transaction is processed.
   */
  countryCode: string;
}

/** An object that provides information about the merchant requesting payment data. */
export interface GooglePayMerchantInfo {
  /**
   * - Type: `string`
   *
   * The merchant name that is rendered in the payment sheet.
   */
  merchantName: string;
  /**
   * - Type: `string`
   *
   * The Google merchant identifier issued after registration with the Google Pay Business Console.
   */
  merchantId: string;
}

/** A response object that provides data for the selected payment method.  */
export interface GooglePayPaymentMethodData {
  /**
   * - Type: `string`
   *
   * User-facing message to describe the payment method that funds the transaction.
   */
  description: string;
  /**
   * - Type: `object`
   *
   * An object that provides information about the selected payment card.
   */
  info: {
    /**
     * - Type: `string`
     *
     * The details about the card. The value is commonly the last four digits of the selected payment account number.
     */
    cardDetails: string;
    /**
     * - Type: `string`
     *
     * The payment card network of the selected payment.
     */
    cardNetwork: string;
  };
  /**
   * - Type: `object`
   *
   * Payment tokenization data for the selected payment method.
   */
  tokenizationData: {
    /**
     * - Type: `string`
     *
     * The generated payment method token which contains a chargeable token object issued by the gateway.
     */
    token: string;
    /**
     * - Type: `string`
     *
     * The type of tokenization applied in the selected payment method which matches the type set in {@link GooglePayTokenizationSpecification}.
     */
    type: string;
  };
  /**
   * - Type: {@link GooglePayPaymentMethod.type}
   *
   * The {@link GooglePayPaymentMethod.type} that was selected in the Google Pay payment sheet.
   */
  type: string;
}

/** An object that contains the necessary information to initialize the Google Pay client. */
export interface GooglePayInitClientRequest {
  /**
   * - Type: {@link GooglePayEnvironment}
   *
   * The environment to run the Google Pay API on.
   */
  environment: GooglePayEnvironment;
  /**
   * - Type: {@link GooglePayVersion}
   *
   * The object that defines which Google Pay API versions to use.
   */
  version: GooglePayVersion;
}

/** The response object that is returned after attempting to initialize the Google Pay client. */
export interface GooglePayInitClientResponse {
  /**
   * - Type: `boolean`
   *
   * A boolean that defines if the client was successfully initialized.
   */
  isReady: boolean;
}

/** The response object that defines if the user is allowed to make a payment using the current device and transaction configuration. */
export interface GooglePayCanMakePaymentsResponse {
  /**
   * - Type: `boolean`
   *
   * A boolean that defines if the client can make a payment.
   */
  canMakePayments: boolean;
}

/** An object describing the payment request, including information about the allowed payment methods, transaction, and the merchant. */
export interface GooglePayPaymentRequest {
  /**
   * - Type: {@link GooglePayPaymentMethod}
   *
   * An array that contains the payment methods supported by Google Pay and your website.
   */
  allowedPaymentMethods: GooglePayPaymentMethod[];
  /**
   * - Type: {@link GooglePayTransactionInfo}
   *
   * An object that describes the current transaction.
   */
  transactionInfo: GooglePayTransactionInfo;
  /**
   * - Type: {@link GooglePayMerchantInfo}
   *
   * An object that provides information about the merchant requesting payment data.
   */
  merchantInfo: GooglePayMerchantInfo;
  /**
   * Set to true to request an email address.
   */
  emailRequired?: boolean;
  /**
   * Set to true to request a full shipping address.
   */
  shippingAddressRequired?: boolean;
  /**
   * If shippingAddressRequired is set to true, specify shipping address restrictions.
   */
  shippingAddressParameters?: GooglePayShippingAddressParameters;
  /**
   * Set to true when the SHIPPING_OPTION callback intent is used. This field is required if you implement support for Authorize Payments or Dynamic Price Updates.
   *
   * For more details see: {@link GooglePayShippingOptionParameters}
   */
  shippingOptionRequired?: boolean;
  /**
   * Set default options.
   */
  shippingOptionParameters?: GooglePayShippingOptionParameters[];
}

export interface GooglePayShippingOptionParameters {
  /**
   * All of the shipping options available for the current request.
   */
  shippingOptions: GooglePayShippingOption[];
  /**
   * An identifier to the default selected shipping option. If this field isn't provided, the first option is the default option.
   */
  defaultSelectedOptionId?: string;
}

export interface GooglePayShippingOption {
  /**
   * The developer can put any value that needs to be returned in PaymentData.
   */
  id: string;
  /**
   * The label to be displayed as the option.
   */
  label: string;
  /**
   * A descriptive text that is displayed below the option label.
   */
  description?: string;
}

/**
 * This object is used to set shipping restrictions.
 */
export interface GooglePayShippingAddressParameters {
  /**
   * ISO 3166-1 alpha-2 country code values of the countries where shipping is allowed. If this object isn't specified, all shipping address countries are allowed.
   */
  allowedCountryCodes?: string[];
  /**
   * Set to true if a phone number is required for the provided shipping address.
   */
  phoneNumberRequired?: boolean;
}

/** A request object used to determine if the user is eligible to make payments on their device with the configured payment methods. */
export interface GooglePayRequest {
  /**
   * - Type: {@link GooglePayPaymentMethod}
   *
   * The array that defines the allowed payment methods supported by Google Pay and your website.
   */
  allowedPaymentMethods: GooglePayPaymentMethod[];
}

export interface GooglePayPlugin {
  initGooglePayClient(
    request: GooglePayInitClientRequest,
  ): Promise<GooglePayInitClientResponse>;
  canMakePayments(
    request: GooglePayRequest,
  ): Promise<GooglePayCanMakePaymentsResponse>;
  makePaymentRequest(
    request: GooglePayPaymentRequest,
  ): Promise<GooglePayPaymentMethodData & GooglePayVersion>;
}

export enum GooglePayErrorCodes {
  Unknown,
  ClientNotInitialized,
  APIError,
  UserCanceled,
  PaymentDataParseFailure,
  ActivityError,
  InvalidUserSuppliedParams,
  BuildPaymentRequestError,
  BuildRequestDataError,
}

/** An error that can be thrown by the plugin. */
export interface GooglePayError {
  /**
   * - Type: `string`
   *
   * A text description of the error that occurred.
   */
  message: string;
  /**
   * - Type: {@link GooglePayErrorCodes}
   *
   * The error code enum representing the error.
   */
  code: GooglePayErrorCodes;
}

/** @ignore */
export function getGooglePayError(
  code: GooglePayErrorCodes,
  error?: Error | ErrorEvent,
): GooglePayError {
  let message = '';
  switch (code) {
    case GooglePayErrorCodes.ClientNotInitialized:
      message = 'Plugin not initialized, call initGooglePayClient() first!';
      break;
    case GooglePayErrorCodes.APIError:
      message = `Unable to load Google Pay API: ${error?.message}`;
      break;
    case GooglePayErrorCodes.UserCanceled:
      message = 'User Canceled';
      break;
    case GooglePayErrorCodes.PaymentDataParseFailure:
      message = `Payment Data Parse Error: ${error?.message}`;
      break;
    case GooglePayErrorCodes.ActivityError:
      message = `Activity Error: ${error?.message}`;
      break;
    case GooglePayErrorCodes.InvalidUserSuppliedParams:
      message = `Invalid User-Supplied Params: ${error?.message}`;
      break;
    case GooglePayErrorCodes.BuildPaymentRequestError:
      message = `Unable To Create Payment Request: ${error?.message}`;
      break;
    case GooglePayErrorCodes.BuildRequestDataError:
      message = `Unable To Build Request Data: ${error?.message}`;
      break;
    default:
      message = `Unhandled Error: ${error?.message}`;
  }

  return {
    message,
    code,
  };
}
