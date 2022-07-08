package me.user.shared

import kotlinx.browser.window




actual class Platform actual constructor() {
    actual val platform: String = window.navigator.userAgent
}