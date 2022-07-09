package me.user.shared.helloSQL

import com.squareup.sqldelight.Query
import com.squareup.sqldelight.Transacter
import kotlin.Any
import kotlin.Long
import kotlin.String
import kotlin.Unit

public interface HelloQueries : Transacter {
  public fun <T : Any> selectAll(mapper: (player_number: Long, full_name: String) -> T): Query<T>

  public fun selectAll(): Query<HockeyPlayer>

  public fun insert(player_number: Long, full_name: String): Unit

  public fun insertFullPlayerObject(hockeyPlayer: HockeyPlayer): Unit
}
