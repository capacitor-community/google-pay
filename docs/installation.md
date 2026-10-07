---
title: Installation
sidebar_label: Installation
---

__Don't have an Google Pay subscription?__ [Try it free now](http://dashboard.ionicframework.com/personal/apps?native_trial=1).

Follow these steps to install Google Pay into your app.

> Google Pay plugin is only available for projects running Capacitor 3 or later.

```bash
npm install @ionic-enterprise/google-pay
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

Integrating with your application only requires three basic API calls. First, initialize the Google Pay client using [initGooglePayClient](classes/googlepay.md#initgooglepayclient). Second, check if the user is running a device capable of using Google Pay in the current context by calling the [canMakePayments](classes/googlepay.md#canmakepayments) method, then make the payment request using [makePaymentRequest](classes/googlepay.md#makepaymentrequest).

```typescript
await GooglePay.initGooglePayClient();
await GooglePay.canMakePayments({});
await GooglePay.makePaymentRequest({});
```
