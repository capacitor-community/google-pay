export enum GooglePayAllowedNetworks {
  AMEX = 'AMEX',
  DISCOVER = 'DISCOVER',
  INTERAC = 'INTERAC',
  JCB = 'JCB',
  MASTERCARD = 'MASTERCARD',
  VISA = 'VISA',
}

export enum GooglePayAllowedAuthMethods {
  PAN_ONLY = 'PAN_ONLY',
  CRYPTOGRAM_3DS = 'CRYPTOGRAM_3DS',
}

export type GooglePayEnvironment = 'TEST' | 'PRODUCTION';

export interface GooglePayVersion {
  apiVersion: number;
  apiVersionMinor: number;
}

export interface GooglePayPaymentProviderLookup {
  gateway: string;
  gatewayMerchantId: string;
}

export interface GooglePayTokenizationSpecification {
  type: 'PAYMENT_GATEWAY';
  parameters: GooglePayPaymentProviderLookup;
}

export interface GooglePayPaymentMethodParameters {
  allowedAuthMethods: GooglePayAllowedAuthMethods[];
  allowedCardNetworks: GooglePayAllowedNetworks[];
}

export interface GooglePayPaymentMethod {
  type: 'CARD';
  parameters: GooglePayPaymentMethodParameters;
  tokenizationSpecification?: GooglePayTokenizationSpecification;
}

export interface GooglePayTransactionInfo {
  totalPriceStatus: 'FINAL';
  totalPrice: string;
  currencyCode: string;
  countryCode: string;
}

export interface GooglePayMerchantInfo {
  merchantName: string;
  merchantId: string;
}

export interface GooglePayPaymentMethodData {
  description: string;
  info: {
    cardDetails: string;
    cardNetwork: string;
  };
  tokenizationData: {
    token: string;
    type: string;
  };
  type: string;
}

export interface GooglePayPlugin {
  initGooglePayClient(options: {
    environment: GooglePayEnvironment;
    version: GooglePayVersion;
  }): Promise<{ isReady: boolean }>;
  canMakePayments(options: {
    allowedPaymentMethods: GooglePayPaymentMethod[];
  }): Promise<{ canMakePayments: boolean }>;
  makePaymentRequest(request: {
    allowedPaymentMethods: GooglePayPaymentMethod[];
    transactionInfo: GooglePayTransactionInfo;
    merchantInfo: GooglePayMerchantInfo;
  }): Promise<GooglePayPaymentMethodData & GooglePayVersion>;
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
