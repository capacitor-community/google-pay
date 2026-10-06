---
title: GooglePayWeb
---

## Constructors

### constructor

**Returns:** <span class="return-code">[_GooglePayWeb_](./googlepayweb)</span>

Overrides: void

Defined in: [src/web.ts:15](https://github.com/ionic-team/enterprise-google-pay/blob/f323c65/packages/google-pay/src/web.ts#L15)

## Properties

### \_googlePayVersion

Defined in: [src/web.ts:15](https://github.com/ionic-team/enterprise-google-pay/blob/f323c65/packages/google-pay/src/web.ts#L15)

### \_paymentsClient

Defined in: [src/web.ts:14](https://github.com/ionic-team/enterprise-google-pay/blob/f323c65/packages/google-pay/src/web.ts#L14)

### config

Inherited from: void

Defined in: node_modules/@capacitor/core/dist/esm/web/index.d.ts:36

### listeners

Inherited from: void

Defined in: node_modules/@capacitor/core/dist/esm/web/index.d.ts:38

### loaded

Inherited from: void

Defined in: node_modules/@capacitor/core/dist/esm/web/index.d.ts:37

### windowListeners

Inherited from: void

Defined in: node_modules/@capacitor/core/dist/esm/web/index.d.ts:41

## Accessors

### paymentsClient

**Returns:** <span class="return-code">_any_</span>

Defined in: [src/web.ts:24](https://github.com/ionic-team/enterprise-google-pay/blob/f323c65/packages/google-pay/src/web.ts#L24)

## Methods

### addListener

#### Parameters

| Name           | Type             |
| :------------- | :--------------- |
| `eventName`    | _string_         |
| `listenerFunc` | ListenerCallback |

**Returns:** <span class="return-code">PluginListenerHandle</span>

Inherited from: void

Defined in: node_modules/@capacitor/core/dist/esm/web/index.d.ts:47

### canMakePayments

#### Parameters

| Name                            | Type                                                               |
| :------------------------------ | :----------------------------------------------------------------- |
| `options`                       | _object_                                                           |
| `options.allowedPaymentMethods` | [_GooglePayPaymentMethod_](../interfaces/googlepaypaymentmethod)[] |

**Returns:** <span class="return-code">_Promise_<{ `canMakePayments`: _boolean_ }\></span>

Implementation of: [GooglePayPlugin](../interfaces/googlepayplugin)

Defined in: [src/web.ts:59](https://github.com/ionic-team/enterprise-google-pay/blob/f323c65/packages/google-pay/src/web.ts#L59)

### hasListeners

#### Parameters

| Name        | Type     |
| :---------- | :------- |
| `eventName` | _string_ |

**Returns:** <span class="return-code">_boolean_</span>

Inherited from: void

Defined in: node_modules/@capacitor/core/dist/esm/web/index.d.ts:51

### initGooglePayClient

#### Parameters

| Name                            | Type                                                      |
| :------------------------------ | :-------------------------------------------------------- |
| `__namedParameters`             | _object_                                                  |
| `__namedParameters.environment` | [_GooglePayEnvironment_](../modules#googlepayenvironment) |
| `__namedParameters.version`     | [_GooglePayVersion_](../interfaces/googlepayversion)      |

**Returns:** <span class="return-code">_Promise_<{ `isReady`: _boolean_ }\></span>

Implementation of: [GooglePayPlugin](../interfaces/googlepayplugin)

Defined in: [src/web.ts:31](https://github.com/ionic-team/enterprise-google-pay/blob/f323c65/packages/google-pay/src/web.ts#L31)

### load

**Returns:** <span class="return-code">_void_</span>

Inherited from: void

Defined in: node_modules/@capacitor/core/dist/esm/web/index.d.ts:54

### makePaymentRequest

#### Parameters

| Name                            | Type                                                                 |
| :------------------------------ | :------------------------------------------------------------------- |
| `request`                       | _object_                                                             |
| `request.allowedPaymentMethods` | [_GooglePayPaymentMethod_](../interfaces/googlepaypaymentmethod)[]   |
| `request.merchantInfo`          | [_GooglePayMerchantInfo_](../interfaces/googlepaymerchantinfo)       |
| `request.transactionInfo`       | [_GooglePayTransactionInfo_](../interfaces/googlepaytransactioninfo) |

**Returns:** <span class="return-code">_Promise_<any\></span>

Implementation of: [GooglePayPlugin](../interfaces/googlepayplugin)

Defined in: [src/web.ts:74](https://github.com/ionic-team/enterprise-google-pay/blob/f323c65/packages/google-pay/src/web.ts#L74)

### notifyListeners

#### Parameters

| Name        | Type     |
| :---------- | :------- |
| `eventName` | _string_ |
| `data`      | _any_    |

**Returns:** <span class="return-code">_void_</span>

Inherited from: void

Defined in: node_modules/@capacitor/core/dist/esm/web/index.d.ts:50

### registerWindowListener

#### Parameters

| Name              | Type     |
| :---------------- | :------- |
| `windowEventName` | _string_ |
| `pluginEventName` | _string_ |

**Returns:** <span class="return-code">_void_</span>

Inherited from: void

Defined in: node_modules/@capacitor/core/dist/esm/web/index.d.ts:52

### removeAllListeners

**Returns:** <span class="return-code">_void_</span>

Inherited from: void

Defined in: node_modules/@capacitor/core/dist/esm/web/index.d.ts:49

### requestPermissions

**Returns:** <span class="return-code">_Promise_<PermissionsRequestResult\></span>

Inherited from: void

Defined in: node_modules/@capacitor/core/dist/esm/web/index.d.ts:53
