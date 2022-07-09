package me.user.shared.shared

import com.squareup.sqldelight.Query
import com.squareup.sqldelight.TransacterImpl
import com.squareup.sqldelight.`internal`.copyOnWriteList
import com.squareup.sqldelight.db.SqlDriver
import kotlin.Any
import kotlin.Int
import kotlin.Long
import kotlin.String
import kotlin.Unit
import kotlin.collections.MutableList
import kotlin.reflect.KClass
import me.user.shared.BatcaveDB
import me.user.shared.helloSQL.HelloQueries
import me.user.shared.helloSQL.HockeyPlayer

internal val KClass<BatcaveDB>.schema: SqlDriver.Schema
  get() = BatcaveDBImpl.Schema

internal fun KClass<BatcaveDB>.newInstance(driver: SqlDriver): BatcaveDB = BatcaveDBImpl(driver)

private class BatcaveDBImpl(
  driver: SqlDriver
) : TransacterImpl(driver), BatcaveDB {
  public override val helloQueries: HelloQueriesImpl = HelloQueriesImpl(this, driver)

  public object Schema : SqlDriver.Schema {
    public override val version: Int
      get() = 1

    public override fun create(driver: SqlDriver): Unit {
      driver.execute(null, """
          |CREATE TABLE hockeyPlayer (
          |  player_number INTEGER NOT NULL,
          |  full_name TEXT NOT NULL
          |)
          """.trimMargin(), 0)
      driver.execute(null, "CREATE INDEX hockeyPlayer_full_name ON hockeyPlayer(full_name)", 0)
      driver.execute(null, """
          |INSERT INTO hockeyPlayer (player_number, full_name)
          |VALUES (15, 'Ryan Getzlaf')
          """.trimMargin(), 0)
    }

    public override fun migrate(
      driver: SqlDriver,
      oldVersion: Int,
      newVersion: Int
    ): Unit {
    }
  }
}

private class HelloQueriesImpl(
  private val database: BatcaveDBImpl,
  private val driver: SqlDriver
) : TransacterImpl(driver), HelloQueries {
  internal val selectAll: MutableList<Query<*>> = copyOnWriteList()

  public override fun <T : Any> selectAll(mapper: (player_number: Long, full_name: String) -> T):
      Query<T> = Query(1574701543, selectAll, driver, "Hello.sq", "selectAll", """
  |SELECT *
  |FROM hockeyPlayer
  """.trimMargin()) { cursor ->
    mapper(
      cursor.getLong(0)!!,
      cursor.getString(1)!!
    )
  }

  public override fun selectAll(): Query<HockeyPlayer> = selectAll { player_number, full_name ->
    HockeyPlayer(
      player_number,
      full_name
    )
  }

  public override fun insert(player_number: Long, full_name: String): Unit {
    driver.execute(285986583, """
    |INSERT INTO hockeyPlayer(player_number, full_name)
    |VALUES (?, ?)
    """.trimMargin(), 2) {
      bindLong(1, player_number)
      bindString(2, full_name)
    }
    notifyQueries(285986583, {database.helloQueries.selectAll})
  }

  public override fun insertFullPlayerObject(hockeyPlayer: HockeyPlayer): Unit {
    driver.execute(-809444634, """
    |INSERT INTO hockeyPlayer(player_number, full_name)
    |VALUES (?, ?)
    """.trimMargin(), 2) {
      bindLong(1, hockeyPlayer.player_number)
      bindString(2, hockeyPlayer.full_name)
    }
    notifyQueries(-809444634, {database.helloQueries.selectAll})
  }
}
