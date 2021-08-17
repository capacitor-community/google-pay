---
title: GooglePayPlugin
---

## Methods

### canMakePayments

#### Parameters

| Name                            | Type                                                   |
| :------------------------------ | :----------------------------------------------------- |
| `options`                       | _object_                                               |
| `options.allowedPaymentMethods` | [_GooglePayPaymentMethod_](./googlepaypaymentmethod)[] |

**Returns:** <span class="return-code">_Promise_<{ `canMakePayments`: _boolean_ }\></span>

Defined in: [src/definitions.ts:79](https://github.com/ionic-team/enterprise-google-pay/blob/f323c65/packages/google-pay/src/definitions.ts#L79)

### initGooglePayClient

#### Parameters

| Name                  | Type                                                      |
| :-------------------- | :-------------------------------------------------------- |
| `options`             | _object_                                                  |
| `options.environment` | [_GooglePayEnvironment_](../modules#googlepayenvironment) |
| `options.version`     | [_GooglePayVersion_](./googlepayversion)                  |

**Returns:** <span class="return-code">_Promise_<{ `isReady`: _boolean_ }\></span>

Defined in: [src/definitions.ts:75](https://github.com/ionic-team/enterprise-google-pay/blob/f323c65/packages/google-pay/src/definitions.ts#L75)

### makePaymentRequest

#### Parameters

| Name                            | Type                                                     |
| :------------------------------ | :------------------------------------------------------- |
| `request`                       | _object_                                                 |
| `request.allowedPaymentMethods` | [_GooglePayPaymentMethod_](./googlepaypaymentmethod)[]   |
| `request.merchantInfo`          | [_GooglePayMerchantInfo_](./googlepaymerchantinfo)       |
| `request.transactionInfo`       | [_GooglePayTransactionInfo_](./googlepaytransactioninfo) |

**Returns:** <span class="return-code">_Promise_<[_GooglePayPaymentMethodData_](./googlepaypaymentmethoddata) & [_GooglePayVersion_](./googlepayversion)\></span>

Defined in: [src/definitions.ts:82](https://github.com/ionic-team/enterprise-google-pay/blob/f323c65/packages/google-pay/src/definitions.ts#L82)
