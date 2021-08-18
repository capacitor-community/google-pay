import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(GooglePayPlugin)
public class GooglePayPlugin: CAPPlugin {
    @objc func initGooglePayClient(_ call: CAPPluginCall) {
        call.reject("Google Pay is not available on iOS.");
    }

    @objc func canMakePayments(_ call: CAPPluginCall) {
        call.reject("Google Pay is not available on iOS.");
    }

    @objc func makePaymentRequest(_ call: CAPPluginCall) {
        call.reject("Google Pay is not available on iOS.");
    }
}
