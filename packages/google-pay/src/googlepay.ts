import type {
  GooglePayCanMakePaymentsResponse,
  GooglePayInitClientRequest,
  GooglePayInitClientResponse,
  GooglePayMakePaymentRequestResponse,
  GooglePayPaymentRequest,
  GooglePayRequest,
} from './definitions';
import { GooglePayImpl } from './web';

export class GooglePay {
  /** @ignore */
  constructor() {
    // Is here just to hide warning message
  }

  /** Loads and initializes the Google Pay API on the client.
   *
   * @usage
   * ```typescript
   *  const options: GooglePayInitClientRequest = {...};
   *  const { isReady } = await GooglePay.initGooglePayClient(options);
   *
   *  if (isReady) {
   *   // continue the payment process...
   *  }
   * ```
   */
  public static initGooglePayClient(
    request: GooglePayInitClientRequest,
  ): Promise<GooglePayInitClientResponse> {
    return GooglePayImpl.initGooglePayClient(request);
  }

  /** Checks if the user is able to make payments,
   * based on their current device and the supplied parameters.
   *
   * @usage
   * ```typescript
   * const options: GooglePayRequest = {...};
   * const { canMakePayments } = await GooglePay.canMakePayments(options);
   *
   * if (canMakePayments) {
   *  // continue the payment process...
   * }
   * ```
   */
  public static canMakePayments(
    request: GooglePayRequest,
  ): Promise<GooglePayCanMakePaymentsResponse> {
    return GooglePayImpl.canMakePayments(request);
  }

  /** Requests a payment by presenting the Google Pay payment sheet over the app.
   *
   * @usage
   * ```typescript
   * const options: GooglePayPaymentRequest = {...};
   * const res = await GooglePay.makePaymentRequest(options);
   *
   * console.log('Payment Response: ', JSON.stringify(res));
   * ```
   */
  public static makePaymentRequest(
    request: GooglePayPaymentRequest,
  ): Promise<GooglePayMakePaymentRequestResponse> {
    return GooglePayImpl.makePaymentRequest(request);
  }
}
