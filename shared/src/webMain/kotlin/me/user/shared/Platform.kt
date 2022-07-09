package me.user.shared

import com.squareup.sqldelight.db.SqlDriver
import com.squareup.sqldelight.drivers.sqljs.initSqlDriver
import kotlinx.browser.window
import kotlinx.coroutines.await


actual class Platform actual constructor() {
    actual val platform: String = window.navigator.userAgent
}

actual suspend fun createDriver(schema: SqlDriver.Schema): SqlDriver {
    return initSqlDriver(schema).await()
}
