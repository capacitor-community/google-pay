import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import './Home.css';
import {
  GooglePayAllowedAuthMethod,
  GooglePay,
  GooglePayEnvironment,
  GooglePayVersion,
  GooglePayPaymentMethod,
  GooglePayAllowedNetwork,
} from '@ionic-enterprise/google-pay';

const Home: React.FC = () => {

  const gpayConfig: {
    googlePayVersion: GooglePayVersion;
    allowedPaymentMethods: GooglePayPaymentMethod[];
  } = {
    googlePayVersion: {
      apiVersion: 2,
      apiVersionMinor: 0,
    },
    allowedPaymentMethods: [
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
            gateway: 'REPLACE_WITH_GATEWAY',
            gatewayMerchantId: 'REPLACE_WITH_GATEWAY_MERCHANT_ID',
          },
        },
      },
    ]
  }

  const initWeb = async () => {
    const { isReady } = await GooglePay.initGooglePayClient({
      environment: GooglePayEnvironment.TEST,
      version: gpayConfig.googlePayVersion,
    });
    console.log('IS READY: ', isReady);
  };

  const canMakePayment = async () => {
    try {
      const res = await GooglePay.canMakePayments({
        allowedPaymentMethods: gpayConfig.allowedPaymentMethods
      });
      console.log('CAN MAKE PAYMENTS', JSON.stringify(res));
    } catch (err: any) {
      console.log(`@ERROR CODE: ${err.code} - ${err.message}`);
    }
  };

  const makePaymentRequest = async () => {
    try {
      const res = await GooglePay.makePaymentRequest({
        allowedPaymentMethods: gpayConfig.allowedPaymentMethods,
        merchantInfo: {
          merchantId: 'REPLACE_WITH_MERCHANT_ID',
          merchantName: 'REPLACE_WITH_MERCHANT_NAME',
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
    } catch (err: any) {
      console.log(`@ERROR CODE: ${err.code} - ${err.message}`);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div id="container">
          <IonButton color="primary" type="button" onClick={initWeb}>Init Client</IonButton>
          <IonButton color="secondary" type="button" onClick={canMakePayment}>Can Make Payment</IonButton>
          <IonButton color="tertiary" type="button" onClick={makePaymentRequest}>Make Payment Request</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
