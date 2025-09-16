import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(GooglePayPlugin)
public class GooglePayPlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "GooglePayPlugin" 
    public let jsName = "GooglePay" 
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "initGooglePayClient", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "canMakePayments", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "makePaymentRequest", returnType: CAPPluginReturnPromise),
    ] 
    @objc func initGooglePayClient(_ call: CAPPluginCall) {
        call.reject("Google Pay is not available on iOS.")
    }

    @objc func canMakePayments(_ call: CAPPluginCall) {
        call.reject("Google Pay is not available on iOS.")
    }

    @objc func makePaymentRequest(_ call: CAPPluginCall) {
        call.reject("Google Pay is not available on iOS.")
    }
}
