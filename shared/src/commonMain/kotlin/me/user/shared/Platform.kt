package me.user.shared

import kotlinx.serialization.Serializable

@Serializable
data class Test(val name: String)

expect class Platform() {
    val platform: String
}