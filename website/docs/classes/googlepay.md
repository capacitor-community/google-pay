---
title: GooglePay
---

## Methods

### canMakePayments

Checks if the user is able to make payments,
based on their current device and the supplied parameters.

#### Usage

        
 
```typescript
const options: GooglePayRequest = {...};
const { canMakePayments } = await GooglePay.canMakePayments(options);

if (canMakePayments) {
 // continue the payment process...
}
```
 

#### Parameters

Name | Type |
:------ | :------ |
`request` | [*GooglePayRequest*](../interfaces/googlepayrequest) |

**Returns:** <span class="return-code">*Promise*<[*GooglePayCanMakePaymentsResponse*](../interfaces/googlepaycanmakepaymentsresponse)\></span>

### initGooglePayClient

Loads and initializes the Google Pay API on the client.

#### Usage

        
 
```typescript
 const options: GooglePayInitClientRequest = {...};
 const { isReady } = await GooglePay.initGooglePayClient(options);

 if (isReady) {
  // continue the payment process...
 }
```
 

#### Parameters

Name | Type |
:------ | :------ |
`request` | [*GooglePayInitClientRequest*](../interfaces/googlepayinitclientrequest) |

**Returns:** <span class="return-code">*Promise*<[*GooglePayInitClientResponse*](../interfaces/googlepayinitclientresponse)\></span>

### makePaymentRequest

Requests a payment by presenting the Google Pay payment sheet over the app.

#### Usage

        
 
```typescript
const options: GooglePayPaymentRequest = {...};
const res = await GooglePay.makePaymentRequest(options);

console.log('Payment Response: ', JSON.stringify(res));
```
 

#### Parameters

Name | Type |
:------ | :------ |
`request` | [*GooglePayPaymentRequest*](../interfaces/googlepaypaymentrequest) |

**Returns:** <span class="return-code">*Promise*<[*GooglePayMakePaymentRequestResponse*](../interfaces/googlepaymakepaymentrequestresponse)\></span>
