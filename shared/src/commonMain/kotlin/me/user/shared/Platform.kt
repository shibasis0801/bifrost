package me.user.shared

import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
@Serializable
data class Test(val name: String)

expect class Platform() {
    val platform: String
}