package com.myntra.appscore.database

import com.squareup.sqldelight.db.SqlDriver
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
@Serializable
data class Test(val name: String)
@Suppress("NO_ACTUAL_FOR_EXPECT")
expect class Platform() {
    val platform: String
}

@Suppress("NO_ACTUAL_FOR_EXPECT")
expect suspend fun createDriver(schema: SqlDriver.Schema): SqlDriver