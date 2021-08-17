import { Component } from '@angular/core';
import { GooglePayError } from '@ionic-enterprise/google-pay';
import { GooglePayService } from './google-pay.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private googlePay: GooglePayService) {}

  public initWeb(): void {
    this.googlePay.init();
  }

  public canMakePayment(): void {
    this.googlePay
      .canMakePayment()
      .catch((err) => console.log(`@ERROR CODE: ${err.code} - ${err.message}`));
  }

  public makePaymentRequest(): void {
    this.googlePay
      .makePaymentRequest()
      .catch((err: GooglePayError) =>
        console.log(`@ERROR CODE: ${err.code} - ${err.message}`)
      );
  }
}
