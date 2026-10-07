<p align="center"><br><img src="https://user-images.githubusercontent.com/236501/85893648-1c92e880-b7a8-11ea-926d-95355b8175c7.png" width="128" height="128" /></p>
<h3 align="center">Google Pay</h3>
<p align="center"><strong><code>@capacitor-community/google-pay</code></strong></p>
<p align="center">
  Capacitor Plugin used to enable Google Pay in an Application
</p>

<p align="center">
  <img src="https://img.shields.io/maintenance/yes/2026?style=flat-square" />
  <a href="https://www.npmjs.com/package/@capacitor-community/google-pay"><img src="https://img.shields.io/npm/l/@capacitor-community/google-pay?style=flat-square" /></a>
  <a href="https://www.npmjs.com/package/@capacitor-community/google-pay"><img src="https://img.shields.io/npm/v/@capacitor-community/google-pay?style=flat-square" /></a>
</p>

## Maintainers

| Maintainer | GitHub | Social |
| -----------| -------| -------|
| Capacitor Community | [capacitor-community](https://github.com/capacitor-community) | |

## Installation

```bash
npm install @capacitor-community/google-pay
npx cap sync
```

## Demo

A working example can be found in the [example-app](./example-app) directory.

## API

<docgen-index>

* [`initGooglePayClient(...)`](#initgooglepayclient)
* [`canMakePayments(...)`](#canmakepayments)
* [`makePaymentRequest(...)`](#makepaymentrequest)
* [Interfaces](#interfaces)
* [Enums](#enums)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### initGooglePayClient(...)

```typescript
initGooglePayClient(request: GooglePayInitClientRequest) => Promise<GooglePayInitClientResponse>
```

| Param         | Type                                                                              |
| ------------- | --------------------------------------------------------------------------------- |
| **`request`** | <code><a href="#googlepayinitclientrequest">GooglePayInitClientRequest</a></code> |

**Returns:** <code>Promise&lt;<a href="#googlepayinitclientresponse">GooglePayInitClientResponse</a>&gt;</code>

--------------------


### canMakePayments(...)

```typescript
canMakePayments(request: GooglePayRequest) => Promise<GooglePayCanMakePaymentsResponse>
```

| Param         | Type                                                          |
| ------------- | ------------------------------------------------------------- |
| **`request`** | <code><a href="#googlepayrequest">GooglePayRequest</a></code> |

**Returns:** <code>Promise&lt;<a href="#googlepaycanmakepaymentsresponse">GooglePayCanMakePaymentsResponse</a>&gt;</code>

--------------------


### makePaymentRequest(...)

```typescript
makePaymentRequest(request: GooglePayPaymentRequest) => Promise<GooglePayMakePaymentRequestResponse>
```

| Param         | Type                                                                        |
| ------------- | --------------------------------------------------------------------------- |
| **`request`** | <code><a href="#googlepaypaymentrequest">GooglePayPaymentRequest</a></code> |

**Returns:** <code>Promise&lt;<a href="#googlepaymakepaymentrequestresponse">GooglePayMakePaymentRequestResponse</a>&gt;</code>

--------------------


### Interfaces


#### GooglePayInitClientResponse

The response object that is returned after attempting to initialize the Google Pay client.

| Prop          | Type                 | Description                                                                          |
| ------------- | -------------------- | ------------------------------------------------------------------------------------ |
| **`isReady`** | <code>boolean</code> | - Type: `boolean` A boolean that defines if the client was successfully initialized. |


#### GooglePayInitClientRequest

An object that contains the necessary information to initialize the Google Pay client.

| Prop              | Type                                                                  | Description                                                                                                                    |
| ----------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **`environment`** | <code><a href="#googlepayenvironment">GooglePayEnvironment</a></code> | - Type: {@link <a href="#googlepayenvironment">GooglePayEnvironment</a>} The environment to run the Google Pay API on.         |
| **`version`**     | <code><a href="#googlepayversion">GooglePayVersion</a></code>         | - Type: {@link <a href="#googlepayversion">GooglePayVersion</a>} The object that defines which Google Pay API versions to use. |


#### GooglePayVersion

A configuration object that defines which Google Pay API versions to use.

| Prop                  | Type                     | Description                                                 |
| --------------------- | ------------------------ | ----------------------------------------------------------- |
| **`apiVersion`**      | <code>0 \| 1 \| 2</code> | - Type: `0` \| `1` \| `2` The major API version to target.  |
| **`apiVersionMinor`** | <code>0 \| 1 \| 2</code> | - Type: `0` \| `1` \| `2` The minor API version to support. |


#### GooglePayCanMakePaymentsResponse

The response object that defines if the user is allowed to make a payment using the current device and transaction configuration.

| Prop                  | Type                 | Description                                                                |
| --------------------- | -------------------- | -------------------------------------------------------------------------- |
| **`canMakePayments`** | <code>boolean</code> | - Type: `boolean` A boolean that defines if the client can make a payment. |


#### GooglePayRequest

A request object used to determine if the user is eligible to make payments on their device with the configured payment methods.

| Prop                        | Type                                  | Description                                                                                                                                                               |
| --------------------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`allowedPaymentMethods`** | <code>GooglePayPaymentMethod[]</code> | - Type: {@link <a href="#googlepaypaymentmethod">GooglePayPaymentMethod</a>} The array that defines the allowed payment methods supported by Google Pay and your website. |


#### GooglePayPaymentMethod

An object that specifies payment methods that are supported by the Google Pay API and your website.

| Prop                            | Type                                                                                              | Description                                                                                                                                                             | Default                  |
| ------------------------------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| **`type`**                      | <code>'CARD'</code>                                                                               | - Type: `CARD` The identifier for the supported payment type.                                                                                                           | <code>`CARD`</code>      |
| **`parameters`**                | <code><a href="#googlepaypaymentmethodparameters">GooglePayPaymentMethodParameters</a></code>     | - Type: {@link <a href="#googlepaypaymentmethodparameters">GooglePayPaymentMethodParameters</a>} The configuration parameters for defining the allowed payment methods. |                          |
| **`tokenizationSpecification`** | <code><a href="#googlepaytokenizationspecification">GooglePayTokenizationSpecification</a></code> | - Type: {@link <a href="#googlepaytokenizationspecification">GooglePayTokenizationSpecification</a>} The Google Pay account configured to receive payments.             | <code>`undefined`</code> |


#### GooglePayPaymentMethodParameters

A configuration object that defines the allowable authorization methods and card networks

| Prop                           | Type                                                                                            | Description                                                                                                                                                                                                                                       |
| ------------------------------ | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`allowedAuthMethods`**       | <code>GooglePayAllowedAuthMethod[]</code>                                                       | - Type: {@link <a href="#googlepayallowedauthmethod">GooglePayAllowedAuthMethod</a>} An array of authorization methods that are allowed to be used during the payment process.                                                                    |
| **`allowedCardNetworks`**      | <code>GooglePayAllowedNetwork[]</code>                                                          | - Type: {@link <a href="#googlepayallowednetwork">GooglePayAllowedNetwork</a>} An array of card networks that are accepted for payment.                                                                                                           |
| **`billingAddressRequired`**   | <code>boolean</code>                                                                            | Set to true if you require a billing address. A billing address should only be requested if it's required to process the transaction. Additional data requests can increase friction in the checkout process and lead to a lower conversion rate. |
| **`billingAddressParameters`** | <code><a href="#googlepaybillingaddressparameters">GooglePayBillingAddressParameters</a></code> | The expected fields returned if {@link <a href="#googlepaybillingaddressparameters">GooglePayBillingAddressParameters</a>} is set to true.                                                                                                        |


#### GooglePayBillingAddressParameters

This object allows you to set additional fields to be returned for a requested billing address.

| Prop                      | Type                                                                                    | Description                                                           |
| ------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| **`format`**              | <code><a href="#googlepaybillingaddressformat">GooglePayBillingAddressFormat</a></code> | Billing address format required to complete the transaction.          |
| **`phoneNumberRequired`** | <code>boolean</code>                                                                    | Set to true if a phone number is required to process the transaction. |


#### GooglePayTokenizationSpecification

An object to configure the Google Pay account to receive chargeable payment information.

| Prop             | Type                                                                                      | Description                                                                                                                                         | Default                        |
| ---------------- | ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| **`type`**       | <code>'PAYMENT_GATEWAY'</code>                                                            | - Type: `PAYMENT_GATEWAY` The payment method tokenization type supported.                                                                           | <code>`PAYMENT_GATEWAY`</code> |
| **`parameters`** | <code><a href="#googlepaypaymentproviderlookup">GooglePayPaymentProviderLookup</a></code> | - Type: {@link <a href="#googlepaypaymentproviderlookup">GooglePayPaymentProviderLookup</a>} The payment gateway specific to the tokenization type. |                                |


#### GooglePayPaymentProviderLookup

A object that specifies the gateway configured in the Google Payments Profile.

| Prop                    | Type                | Description                                                               |
| ----------------------- | ------------------- | ------------------------------------------------------------------------- |
| **`gateway`**           | <code>string</code> | - Type: `string` The gateway's identifier which is issued by Google.      |
| **`gatewayMerchantId`** | <code>string</code> | - Type: `string` The gateway account ID which is provided by the gateway. |


#### GooglePayMakePaymentRequestResponse

| Prop                    | Type                                                                              | Description                                                                          |
| ----------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| **`paymentMethodData`** | <code><a href="#googlepaypaymentmethoddata">GooglePayPaymentMethodData</a></code> | - Type: {@link <a href="#googlepaypaymentmethoddata">GooglePayPaymentMethodData</a>} |


#### GooglePayPaymentMethodData

A response object that provides data for the selected payment method.

| Prop                   | Type                                                       | Description                                                                                                                                                                                                        |
| ---------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **`description`**      | <code>string</code>                                        | - Type: `string` User-facing message to describe the payment method that funds the transaction.                                                                                                                    |
| **`info`**             | <code>{ cardDetails: string; cardNetwork: string; }</code> | - Type: `object` An object that provides information about the selected payment card.                                                                                                                              |
| **`tokenizationData`** | <code>{ token: string; type: string; }</code>              | - Type: `object` Payment tokenization data for the selected payment method.                                                                                                                                        |
| **`type`**             | <code>string</code>                                        | - Type: {@link <a href="#googlepaypaymentmethod">GooglePayPaymentMethod.type</a>} The {@link <a href="#googlepaypaymentmethod">GooglePayPaymentMethod.type</a>} that was selected in the Google Pay payment sheet. |


#### GooglePayPaymentRequest

An object describing the payment request, including information about the allowed payment methods, transaction, and the merchant.

| Prop                            | Type                                                                                              | Description                                                                                                                                                                                                                                                                     |
| ------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`allowedPaymentMethods`**     | <code>GooglePayPaymentMethod[]</code>                                                             | - Type: {@link <a href="#googlepaypaymentmethod">GooglePayPaymentMethod</a>} An array that contains the payment methods supported by Google Pay and your website.                                                                                                               |
| **`transactionInfo`**           | <code><a href="#googlepaytransactioninfo">GooglePayTransactionInfo</a></code>                     | - Type: {@link <a href="#googlepaytransactioninfo">GooglePayTransactionInfo</a>} An object that describes the current transaction.                                                                                                                                              |
| **`merchantInfo`**              | <code><a href="#googlepaymerchantinfo">GooglePayMerchantInfo</a></code>                           | - Type: {@link <a href="#googlepaymerchantinfo">GooglePayMerchantInfo</a>} An object that provides information about the merchant requesting payment data.                                                                                                                      |
| **`emailRequired`**             | <code>boolean</code>                                                                              | Set to true to request an email address.                                                                                                                                                                                                                                        |
| **`shippingAddressRequired`**   | <code>boolean</code>                                                                              | Set to true to request a full shipping address.                                                                                                                                                                                                                                 |
| **`shippingAddressParameters`** | <code><a href="#googlepayshippingaddressparameters">GooglePayShippingAddressParameters</a></code> | If shippingAddressRequired is set to true, specify shipping address restrictions.                                                                                                                                                                                               |
| **`shippingOptionRequired`**    | <code>boolean</code>                                                                              | Set to true when the SHIPPING_OPTION callback intent is used. This field is required if you implement support for Authorize Payments or Dynamic Price Updates. For more details see: {@link <a href="#googlepayshippingoptionparameters">GooglePayShippingOptionParameters</a>} |
| **`shippingOptionParameters`**  | <code>GooglePayShippingOptionParameters[]</code>                                                  | Set default options.                                                                                                                                                                                                                                                            |


#### GooglePayTransactionInfo

An object that describes a transaction, including its status, price, and locale.

| Prop                   | Type                 | Description                                                                                                                                                                         | Default              |
| ---------------------- | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| **`totalPriceStatus`** | <code>'FINAL'</code> | - Type: `FINAL` The status of the transaction's price.                                                                                                                              | <code>`FINAL`</code> |
| **`totalPrice`**       | <code>string</code>  | - Type: `string` The total monetary value of the transaction with an optional decimal precision of two places. The format should follow the regex format: `^[0-9]+(\.[0-9][0-9])?$` |                      |
| **`currencyCode`**     | <code>string</code>  | - Type: `string` The ISO 4217 alphabetic currency code.                                                                                                                             |                      |
| **`countryCode`**      | <code>string</code>  | - Type: `string` The ISO 3166-1 alpha-2 country code where the transaction is processed.                                                                                            |                      |


#### GooglePayMerchantInfo

An object that provides information about the merchant requesting payment data.

| Prop               | Type                | Description                                                                                                     |
| ------------------ | ------------------- | --------------------------------------------------------------------------------------------------------------- |
| **`merchantName`** | <code>string</code> | - Type: `string` The merchant name that is rendered in the payment sheet.                                       |
| **`merchantId`**   | <code>string</code> | - Type: `string` The Google merchant identifier issued after registration with the Google Pay Business Console. |


#### GooglePayShippingAddressParameters

This object is used to set shipping restrictions.

| Prop                      | Type                  | Description                                                                                                                                                    |
| ------------------------- | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`allowedCountryCodes`** | <code>string[]</code> | ISO 3166-1 alpha-2 country code values of the countries where shipping is allowed. If this object isn't specified, all shipping address countries are allowed. |
| **`phoneNumberRequired`** | <code>boolean</code>  | Set to true if a phone number is required for the provided shipping address.                                                                                   |


#### GooglePayShippingOptionParameters

| Prop                          | Type                                   | Description                                                                                                                  |
| ----------------------------- | -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| **`shippingOptions`**         | <code>GooglePayShippingOption[]</code> | All of the shipping options available for the current request.                                                               |
| **`defaultSelectedOptionId`** | <code>string</code>                    | An identifier to the default selected shipping option. If this field isn't provided, the first option is the default option. |


#### GooglePayShippingOption

| Prop              | Type                | Description                                                               |
| ----------------- | ------------------- | ------------------------------------------------------------------------- |
| **`id`**          | <code>string</code> | The developer can put any value that needs to be returned in PaymentData. |
| **`label`**       | <code>string</code> | The label to be displayed as the option.                                  |
| **`description`** | <code>string</code> | A descriptive text that is displayed below the option label.              |


### Enums


#### GooglePayEnvironment

| Members          | Value                     | Description                                                                                            |
| ---------------- | ------------------------- | ------------------------------------------------------------------------------------------------------ |
| **`TEST`**       | <code>'TEST'</code>       | Dummy payment environment that is suitable for testing transactions.                                   |
| **`PRODUCTION`** | <code>'PRODUCTION'</code> | Used to accept transactions when a valid Google merchant ID is specified and configured on the domain. |


#### GooglePayAllowedAuthMethod

| Members              | Value                         | Description                                                                                                                                                       |
| -------------------- | ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`PAN_ONLY`**       | <code>'PAN_ONLY'</code>       | This is associated with payment cards stored on file with the user's Google Account. The returned payment data includes the user's Personal Account Number (PAN). |
| **`CRYPTOGRAM_3DS`** | <code>'CRYPTOGRAM_3DS'</code> | This is associated with cards stored as Android device tokens. The returned payment data includes a 3-D Secure (3DS) cryptogram.                                  |


#### GooglePayAllowedNetwork

| Members          | Value                     | Description         |
| ---------------- | ------------------------- | ------------------- |
| **`AMEX`**       | <code>'AMEX'</code>       | American Express    |
| **`DISCOVER`**   | <code>'DISCOVER'</code>   | Discover Card       |
| **`INTERAC`**    | <code>'INTERAC'</code>    | Interac             |
| **`JCB`**        | <code>'JCB'</code>        | Japan Credit Bureau |
| **`MASTERCARD`** | <code>'MASTERCARD'</code> | Mastercard          |
| **`VISA`**       | <code>'VISA'</code>       | VISA                |


#### GooglePayBillingAddressFormat

| Members       | Value               | Description                                                            |
| ------------- | ------------------- | ---------------------------------------------------------------------- |
| **`Minimal`** | <code>'MIN'</code>  | Name, country code, and postal code (default).                         |
| **`Full`**    | <code>'FULL'</code> | Name, street address, locality, region, country code, and postal code. |

</docgen-api>
