declare module '@capacitor/core' {
  interface PluginRegistry {
    GooglePay: GooglePayPlugin;
  }
}

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
