---
title: GooglePayPaymentMethodParameters
---

A configuration object that defines the allowable authorization methods and card networks

## Properties

### allowedAuthMethods

- Type: [GooglePayAllowedAuthMethod](../enums/googlepayallowedauthmethod)

An array of authorization methods that are allowed to be used during the payment process.

### allowedCardNetworks

- Type: [GooglePayAllowedNetwork](../enums/googlepayallowednetwork)

An array of card networks that are accepted for payment.

### billingAddressParameters

The expected fields returned if [GooglePayBillingAddressParameters](./googlepaybillingaddressparameters) is set to true.

### billingAddressRequired

Set to true if you require a billing address. A billing address should only be requested if it's required to process the transaction. Additional data requests can increase friction in the checkout process and lead to a lower conversion rate.
