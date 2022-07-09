package me.user.shared.database

import com.squareup.sqldelight.db.SqlDriver
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import me.user.shared.BatcaveDB
import me.user.shared.createDriver
import kotlin.js.JsExport

class SQLDatabase(
    val driverProvider: suspend ((schema: SqlDriver.Schema) -> SqlDriver)
) {
    private var batcaveDB: BatcaveDB? = null

    suspend fun getDatabase(): BatcaveDB {
        if (batcaveDB == null) {
            val driver = driverProvider(BatcaveDB.Schema)
            batcaveDB =  BatcaveDB(driver)
        }
        batcaveDB?.helloQueries?.insert(7, "0")
        return batcaveDB!!
    }

    suspend operator fun <R> invoke(block: suspend BatcaveDB.() -> R): R =
        getDatabase().block()

}



val sqlDatabase = SQLDatabase(::createDriver)

@JsExport
fun helloSQL() {
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