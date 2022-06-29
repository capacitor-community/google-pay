import { Injectable } from '@angular/core';
import {
  GooglePayAllowedAuthMethod,
  GooglePay,
  GooglePayEnvironment,
  GooglePayVersion,
  GooglePayPaymentMethod,
  GooglePayAllowedNetwork,
} from '@ionic-enterprise/google-pay';


@Injectable({
  providedIn: 'root',
})
export class GooglePayService {
  private googlePayVersion: GooglePayVersion = {
    apiVersion: 2,
    apiVersionMinor: 0,
  };
  private allowedPaymentMethods: GooglePayPaymentMethod[] = [
    {
      type: 'CARD',
      parameters: {
        allowedAuthMethods: [
          GooglePayAllowedAuthMethod.PAN_ONLY,
          GooglePayAllowedAuthMethod.CRYPTOGRAM_3DS,
        ],
        allowedCardNetworks: [GooglePayAllowedNetwork.VISA, GooglePayAllowedNetwork.MASTERCARD],
      },
      tokenizationSpecification: {
        type: 'PAYMENT_GATEWAY',
        parameters: {
          gateway: 'example',
          gatewayMerchantId: 'exampleGatewayMerchantId',
        },
      },
    },
  ];

  constructor() {}

  public async init(): Promise<void> {
    const { isReady } = await GooglePay.initGooglePayClient({
      environment: GooglePayEnvironment.TEST,
      version: this.googlePayVersion,
    });
    console.log('IS READY: ', isReady);
  }

  public async canMakePayment(): Promise<void> {
    const res = await GooglePay.canMakePayments({
      allowedPaymentMethods: this.allowedPaymentMethods
    });
    console.log('CAN MAKE PAYMENTS', JSON.stringify(res));
  }

  public async makePaymentRequest(): Promise<void> {
    const res = await GooglePay.makePaymentRequest({
      allowedPaymentMethods: this.allowedPaymentMethods,
      merchantInfo: {
        merchantId: '12345678901234567890',
        merchantName: 'Dallas Test Merchant',
      },
      transactionInfo: {
        countryCode: 'US',
        currencyCode: 'USD',
        totalPrice: '1.00',
        totalPriceStatus: 'FINAL',
      },
      shippingAddressRequired: true,
    });
    console.log('MAKE PAYMENT REQUEST', JSON.stringify(res));
  }
}
