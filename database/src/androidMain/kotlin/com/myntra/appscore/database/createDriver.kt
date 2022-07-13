package com.myntra.appscore.database

import android.content.Context
import com.squareup.sqldelight.db.SqlDriver
import com.squareup.sqldelight.android.AndroidSqliteDriver

actual suspend fun createDriver(schema: SqlDriver.Schema): SqlDriver {
    return AndroidSqliteDriver(Database.Schema, context, "test.db")
}
