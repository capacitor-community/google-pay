package com.getcapacitor.community.googlepay

import com.getcapacitor.JSObject

class GooglePayVersion(val apiVersion: Int?, val apiVersionMinor: Int?)

class TypeCasting {
    fun toVersion(version: JSObject): GooglePayVersion {
        return GooglePayVersion(version.getInteger("apiVersion"), version.getInteger("apiVersionMinor"))
    }
}