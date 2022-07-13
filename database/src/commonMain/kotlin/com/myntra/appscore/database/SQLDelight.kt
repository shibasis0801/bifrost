package com.myntra.appscore.database

import com.squareup.sqldelight.db.SqlDriver
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import com.myntra.appscore.MainDatabase
import kotlin.js.JsExport


class SQLDatabase(private val sqlDriver: SqlDriver) {
    private val mainDatabase by lazy {
        MainDatabase(sqlDriver)
    }
    suspend operator fun <R> invoke(block: suspend MainDatabase.() -> R): R =
        mainDatabase.block()
}


/*
val sqlDatabase = SQLDatabase(::createDriver)

@JsExport
fun helloSQL1() {
    println("PRINT SQL DATA")
    GlobalScope.launch {
        println("PRINT SQL DATA")
        sqlDatabase {
            println("PRINT SQL DATA")
            helloQueries.selectAll { player_number, full_name ->
                println("PRINT SQL DATA, $player_number, $full_name")
            }.executeAsList()
        }
    }
}

*/

/*
Implementation Notes

Koin Annotations will provide

 */