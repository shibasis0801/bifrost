package me.user.shared

import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

@OptIn(ExperimentalJsExport::class)
@JsExport
fun helloWorld(message: String) = "Hello $message"

class Greeting {
    fun greeting(): String {
        return "Hello, ${Platform().platform}!"
    }
}
