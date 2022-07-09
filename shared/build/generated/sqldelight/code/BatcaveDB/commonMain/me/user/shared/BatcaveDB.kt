package me.user.shared

import com.squareup.sqldelight.Transacter
import com.squareup.sqldelight.db.SqlDriver
import me.user.shared.helloSQL.HelloQueries
import me.user.shared.shared.newInstance
import me.user.shared.shared.schema

public interface BatcaveDB : Transacter {
  public val helloQueries: HelloQueries

  public companion object {
    public val Schema: SqlDriver.Schema
      get() = BatcaveDB::class.schema

    public operator fun invoke(driver: SqlDriver): BatcaveDB = BatcaveDB::class.newInstance(driver)
  }
}
