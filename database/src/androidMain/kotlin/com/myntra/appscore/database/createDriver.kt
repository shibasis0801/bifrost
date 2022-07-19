package com.myntra.appscore.database

import android.app.Activity
import android.content.Context
import com.myntra.appscore.MainDatabase
import com.squareup.sqldelight.db.SqlDriver
import com.squareup.sqldelight.android.AndroidSqliteDriver


actual class DriverProvider(activity: Activity) {
    private val driver = AndroidSqliteDriver(MainDatabase.Schema, activity, "main.db")
    actual suspend fun get(): SqlDriver = driver
}

fun createDriver(activity: Activity) = DriverProvider(activity)