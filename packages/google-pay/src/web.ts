import { WebPlugin, registerPlugin } from '@capacitor/core';

import type {
  GooglePayEnvironment,
  GooglePayMerchantInfo,
  GooglePayPaymentMethod,
  GooglePayPlugin,
  GooglePayTransactionInfo,
  GooglePayVersion,
} from './definitions';

declare let google: any;

export class GooglePayWeb extends WebPlugin implements GooglePayPlugin {
  private _paymentsClient: any;
  private _googlePayVersion?: GooglePayVersion;

  constructor() {
    super({
      name: 'GooglePay',
      platforms: ['web'],
    });
  }

  private get paymentsClient(): any {
    if (!this._paymentsClient) {
      throw new Error('Google Pay Web Client not initialized');
    }
    return this._paymentsClient;
  }

  async initGooglePayClient({
    environment,
    version,
  }: {
    environment: GooglePayEnvironment;
    version: GooglePayVersion;
  }): Promise<{ isReady: boolean }> {
    this._googlePayVersion = version;
    return new Promise((resolve, reject) => {
      // something
      const scriptEl = document.createElement('script');
      scriptEl.src = 'https://pay.google.com/gp/p/js/pay.js';
      scriptEl.async = true;
      scriptEl.addEventListener('load', () => {
        console.warn('google pay client loaded');
        this._paymentsClient = new google.payments.api.PaymentsClient({
          environment,
        });
        resolve({ isReady: true });
      });
      scriptEl.addEventListener('error', err => {
        console.error('Unable to load Google Pay API: ', err);
        reject({ isReady: false });
      });
      document.body.appendChild(scriptEl);
    });
  }

  async canMakePayments(options: {
    allowedPaymentMethods: GooglePayPaymentMethod[];
  }): Promise<{ canMakePayments: boolean }> {
    try {
      const isReady = await this.paymentsClient.isReadyToPay({
        ...this._googlePayVersion,
        ...options,
      });
      return { canMakePayments: isReady.result };
    } catch (e) {
      console.error('Unable to determine ready to pay status', e);
      return { canMakePayments: false };
    }
  }

  async makePaymentRequest(request: {
    allowedPaymentMethods: GooglePayPaymentMethod[];
    transactionInfo: GooglePayTransactionInfo;
    merchantInfo: GooglePayMerchantInfo;
  }): Promise<any> {
    try {
      const paymentData = await this.paymentsClient.loadPaymentData({
        ...this._googlePayVersion,
        ...request,
      });
      return paymentData;
    } catch (e) {
      console.error(e);
    }
  }
}

const GooglePay = registerPlugin<GooglePayPlugin>('GooglePay', {
  web: () => import('./web').then(m => new m.GooglePayWeb()),
});

export { GooglePay };
