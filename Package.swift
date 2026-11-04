// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "IonicEnterpriseGooglePay",
    platforms: [.iOS(.v16)],
    products: [
        .library(
            name: "IonicEnterpriseGooglePay",
            targets: ["GooglePayPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor.git", from: "9.0.0-beta.0")
    ],
    targets: [
        .target(
            name: "GooglePayPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor")
            ],
            path: "ios/Sources/GooglePayPlugin")
    ]
)