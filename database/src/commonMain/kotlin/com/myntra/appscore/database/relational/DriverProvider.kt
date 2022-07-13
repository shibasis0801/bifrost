package com.myntra.appscore.database.relational

import com.squareup.sqldelight.db.SqlDriver

expect class DriverProvider {
    suspend fun get(schema: SqlDriver.Schema): SqlDriver
}
