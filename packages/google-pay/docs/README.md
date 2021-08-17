# Capacitor Google Pay Plugin

## Demo Project

The [demo project](https://github.com/dallastjames/ionic-google-pay-demo) allows you to experience the basic use of the Google Pay plugin. This application only runs in `TEST` mode and requires an Ionic Enterprise key. Your google account must also belong to the [test card suite group](https://developers.google.com/pay/api/web/guides/resources/test-card-suite) provided by Google.

## Installing

If you have not already setup Ionic Enterprise in your app, [follow the one-time setup steps](https://ionic.io/docs/premier-plugins/setup).

Next, install the plugin:

```bash
npm install @ionic-enterprise/google-pay
npx cap sync
```

Finally, register the plugin with your Android application. This is done in your `MainActivity`, where you `add` it in like so:

```java
// android/app/src/main/java/com/example/myapp/MainActivity.java

// Other imports...
import io.ionic.enterprise.googlepay.GooglePay;

public class MainActivity extends BridgeActivity {

  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the Bridge
    this.init(
        savedInstanceState,
        new ArrayList<Class<? extends Plugin>>() {
          {
            // Additional plugins you've installed go here
            add(GooglePay.class);
          }
        }
      );
  }
}

```

## Plugins Methods

### `GooglePay.initGooglePayClient(parameters): Promise<{ ready: boolean }>`

| Name        |          Type          | Description                                                        |
| :---------- | :--------------------: | :----------------------------------------------------------------- |
| environment | `TEST` \| `PRODUCTION` | Configure the plugin to run in `TEST` or `PRODUCTION` environment. |
| version     |        _object_        | Specify the api version major and minor to use                     |

This method is used to initially configure the client both for Web and Android. This method must be called for any other methods are called, failure to do so will result in thrown errors from the other methods. Google Pay for web relies on an external JS library which this method will automatically add to your application when called. This method will return once the script has been successfully downloaded to the device and initialized. On Native, this step is not necessary as all of the needed libraries are bundled with the application.

```typescript
const { ready } = await GooglePay.initGooglePayClient({
  environment: 'TEST',
  version: {
    apiVersion: 2,
    apiVersionMinor: 0,
  },
});
```

### `GooglePay.canMakePayments(parameters): Promise<{ canMakePayments: boolean }>`

| Name                  |  Type   | Description                                                       |
| :-------------------- | :-----: | :---------------------------------------------------------------- |
| allowedPaymentMethods | _array_ | Defines the types of payments that you accept in your application |

You should call this method with details relating to the payment methods that you accept as a vendor. If the user has payment methods configured that match your request, the method will return `canMakePayments = true` else, the value will be `false`.

```typescript
const { canMakePayments } = await GooglePay.canMakePayments({
  allowedPaymentMethods: [
    {
      type: 'CARD',
      parameters: {
        allowedAuthMethods: [
          GooglePayAllowedAuthMethods.PAN_ONLY,
          GooglePayAllowedAuthMethods.CRYPTOGRAM_3DS,
        ],
        allowedCardNetworks: [GooglePayAllowedNetworks.VISA],
      },
      tokenizationSpecification: {
        type: 'PAYMENT_GATEWAY',
        parameters: {
          gateway: 'example',
          gatewayMerchantId: 'exampleGatewayMerchantId',
        },
      },
    },
  ],
});
```

### `GooglePay.makePaymentRequest(parameters): Promise<GooglePayPaymentMethodData>`

| Name                  |   Type   | Description                                                          |
| :-------------------- | :------: | :------------------------------------------------------------------- |
| allowedPaymentMethods | _array_  | Defines the types of payments that you accept in your application    |
| merchantInfo          | _object_ | Defines the merchant id and name used in the payment transaction     |
| transactionInfo       | _object_ | Defines the payment details and amount to be used in the transaction |

Finally, when you're ready to get payment details for a transaction from a user, you should call this method with all of the required details. This will bring up the payment dialog, allowing the user to choose a valid payment method that they have stored. Once they do and confirm payment, the payment data returned will contain all of the information, including the payment token, that you need to complete payment processing with your payment processor.

```typescript
const { paymentMethodData } = await GooglePay.makePaymentRequest({
  allowedPaymentMethods: [
    {
      type: 'CARD',
      parameters: {
        allowedAuthMethods: [
          GooglePayAllowedAuthMethods.PAN_ONLY,
          GooglePayAllowedAuthMethods.CRYPTOGRAM_3DS,
        ],
        allowedCardNetworks: [GooglePayAllowedNetworks.VISA],
      },
      tokenizationSpecification: {
        type: 'PAYMENT_GATEWAY',
        parameters: {
          gateway: 'example',
          gatewayMerchantId: 'exampleGatewayMerchantId',
        },
      },
    },
  ],
  merchantInfo: {
    merchantId: '12345678901234567890',
    merchantName: 'Example Merchant',
  },
  transactionInfo: {
    countryCode: 'US',
    currencyCode: 'USD',
    totalPrice: '1.00',
    totalPriceStatus: 'FINAL',
  },
});
```

## Plugin Interface Definitions

### Enums

#### `GooglePayAllowedNeteworks`

```typescript
enum GooglePayAllowedNetworks {
  AMEX = 'AMEX',
  DISCOVER = 'DISCOVER',
  INTERAC = 'INTERAC',
  JCB = 'JCB',
  MASTERCARD = 'MASTERCARD',
  VISA = 'VISA',
}
```

#### `GooglePayAllowedAuthMethods`

```typescript
enum GooglePayAllowedAuthMethods {
  PAN_ONLY = 'PAN_ONLY',
  CRYPTOGRAM_3DS = 'CRYPTOGRAM_3DS',
}
```

### Interfaces

#### `GooglePayVersion`

| Name            |   Type   | Description                                                             |
| :-------------- | :------: | :---------------------------------------------------------------------- |
| apiVersion      | _number_ | Defines the major version number for the API that you would like to use |
| apiVersionMinor | _number_ | Defines the minor version number for the API that you would like to use |

```typescript
{
  apiVersion: 2,
  apiVersionMinor: 0
}
```

#### `GooglePayPaymentProviderLookup`

| Name              |   Type   | Description                                             |
| :---------------- | :------: | :------------------------------------------------------ |
| gateway           | _string_ | Name of your payment gateway                            |
| gatewayMerchantId | _string_ | ID of the merchant being used with your payment gateway |

> Gateway information can be looked up in the [list provided by Google](https://developers.google.com/pay/api/web/guides/tutorial#tokenization)

```typescript
{
  "gateway": "example",
  "gatewayMerchantId": "exampleGatewayMerchantId"
}
```

#### `GooglePayTokenizationSpecification`

| Name       |                               Type                                | Description                                     |
| :--------- | :---------------------------------------------------------------: | :---------------------------------------------- |
| type       |                         `PAYMENT_GATEWAY`                         | Defines this object as a payment gateway object |
| parameters | [GooglePayPaymentProviderLookup](#googlepaypaymentproviderlookup) | Defines the provider look up information        |

```typescript
{
  "type": "PAYMENT_GATEWAY",
  "parameters": {}
}
```

#### `GooglePayPaymentMethodParameters`

| Name                |                                Type                                | Description                                              |
| :------------------ | :----------------------------------------------------------------: | :------------------------------------------------------- |
| allowedAuthMethods  | Array<[GooglePayAllowedAuthMethods](#googlepayallowedauthmethods)> | Defines the payment authorization methods that you allow |
| allowedCardNetworks |   Array<[GooglePayAllowedNetworks](#googlepayallowedneteworks)>    | Defines the payment networks taht you accept             |

```typescript
{
  "allowedAuthMethods": [
    GooglePayAllowedAuthMethods.PAN_ONLY,
    GooglePayAllowedAuthMethods.CRYPTOGRAM_3DS
  ],
  "allowedCardNetworks": [
    GooglePayAllowedNetworks.VISA
  ]
}
```

#### `GooglePayPaymentMethod`

| Name                      |                                   Type                                    | Description                                                       |
| :------------------------ | :-----------------------------------------------------------------------: | :---------------------------------------------------------------- |
| type                      |                                  `CARD`                                   | Defines this object as a card payment method                      |
| parameters                |   [GooglePayPaymentMethodParameters](#googlepaypaymentmethodparameters)   | Defines the parameters for this payment method                    |
| tokenizationSpecification | [GooglePayTokenizationSpecification](#googlepaytokenizationspecification) | Defines the gateway provider used to tokenize the payment request |

```typescript
{
  "type": "CARD",
  "parameters": {},
  "tokenizationSpecification": {}
}
```

#### `GooglePayTransactionInfo`

| Name             |   Type   | Description                                                                                   |
| :--------------- | :------: | :-------------------------------------------------------------------------------------------- |
| totalPriceStatus | `FINAL`  | Describes the designated price as the final price                                             |
| totalPrice       | _string_ | Specify the price in the currency code provided                                               |
| currencyCode     | _string_ | Define the currency used in its ISO specificiation                                            |
| countryCode      | _string_ | Two character ISO specification for the country code where the transaction is being processed |

```typescript
{
  "countryCode": "US",
  "currencyCode": "USD",
  "totalPrice": "1.00",
  "totalPriceStatus": "FINAL"
}
```

#### `GooglePayPaymentMethodData`

| Name                   |   Type   | Description                                                                      |
| :--------------------- | :------: | :------------------------------------------------------------------------------- |
| description            | _string_ | User friendly text that describes the payment used in the transaction            |
| info.cardDetails       | _string_ | The last 4 digits of the card used in the transaction                            |
| info.cardNetwork       | _string_ | The network of the card used in the transaction                                  |
| tokenizationData.token | _string_ | The token that should be used to process the payment with your payment processor |
| tokenizationData.type  | _string_ | The type declaring the payment gateway type used                                 |
| type                   | _string_ | The type declaring the payment method type used                                  |

```typescript
{
  "description": "Visa **** 1111",
  "info": {
    "cardDetails": "1111",
    "cardNetwork": "VISA"
  },
  "tokenizationData": {
    "token": "examplePaymentMethodToken",
    "type": "PAYMENT_GATEWAY"
  },
  "type": "CARD"
}
```
