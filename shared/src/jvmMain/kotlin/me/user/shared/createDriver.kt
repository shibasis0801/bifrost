package me.user.shared

import com.squareup.sqldelight.db.SqlDriver
import com.squareup.sqldelight.sqlite.driver.JdbcSqliteDriver


actual suspend fun createDriver(schema: SqlDriver.Schema): SqlDriver {
    return JdbcSqliteDriver(JdbcSqliteDriver.IN_MEMORY).also { driver ->
        schema.create(driver)
    }
}
