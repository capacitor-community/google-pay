---
title: Installation
sidebar_label: Installation
---


Follow these steps to install Google Pay into your app.

> This plugin requires Capacitor 8 or later.

```bash
npm install @capacitor-community/google-pay
npx cap sync
```

Add the following line to your native Android project to enable the Google Wallet API.

```xml
// Android - AndroidManifest.xml
<meta-data
  android:name="com.google.android.gms.wallet.api.enabled"
  android:value="true" />
```

## Getting Started

Integrating with your application only requires three basic API calls. First, initialize the Google Pay client using `initGooglePayClient`. Second, check if the user is running a device capable of using Google Pay in the current context by calling the `canMakePayments` method, then make the payment request using `makePaymentRequest`.

```typescript
await GooglePay.initGooglePayClient();
await GooglePay.canMakePayments({});
await GooglePay.makePaymentRequest({});
```

See the [API reference](../README.md#api) in the main README for full method signatures and types.
