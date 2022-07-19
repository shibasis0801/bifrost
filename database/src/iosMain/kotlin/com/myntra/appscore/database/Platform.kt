package com.myntra.appscore.database


import com.myntra.appscore.MainDatabase
import com.squareup.sqldelight.db.SqlDriver
import com.squareup.sqldelight.drivers.native.NativeSqliteDriver
import platform.UIKit.UIDevice

actual class Platform actual constructor() {
    actual val platform: String = UIDevice.currentDevice.systemName() + " " + UIDevice.currentDevice.systemVersion
}

actual class DriverProvider {
    actual suspend fun get(): SqlDriver = NativeSqliteDriver(MainDatabase.Schema, "test.db")
}
