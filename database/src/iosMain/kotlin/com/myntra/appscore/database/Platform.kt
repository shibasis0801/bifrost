package com.myntra.appscore.database


import com.squareup.sqldelight.db.SqlDriver
import com.squareup.sqldelight.drivers.native.NativeSqliteDriver
import platform.UIKit.UIDevice

actual class Platform actual constructor() {
    actual val platform: String = UIDevice.currentDevice.systemName() + " " + UIDevice.currentDevice.systemVersion
}

actual suspend fun createDriver(schema: SqlDriver.Schema): SqlDriver {
    return NativeSqliteDriver(schema, "test.db")
}