package dev.shibasis.bifrost.common

import dev.shibasis.bifrost.Version
import dev.shibasis.bifrost.utils.installModules
import dev.shibasis.bifrost.utils.module
import org.gradle.kotlin.dsl.DependencyHandlerScope
import org.jetbrains.kotlin.gradle.plugin.KotlinDependencyHandler


fun koinList(koinVersion: String) = listOf(
    module("io.insert-koin:koin-android:$koinVersion"),
    module("io.insert-koin:koin-android-compat:$koinVersion"),
    module("io.insert-koin:koin-androidx-workmanager:$koinVersion"),
    module("io.insert-koin:koin-androidx-navigation:$koinVersion"),
    module("io.insert-koin:koin-androidx-compose:$koinVersion"),
)

fun KotlinDependencyHandler.androidKoin(koinVersion: String = Version.Koin) =
    installModules(koinList(koinVersion))

fun DependencyHandlerScope.androidKoin(koinVersion: String = Version.Koin) =
    installModules(koinList(koinVersion))


fun KotlinDependencyHandler.commonKoin(koinVersion: String = Version.Koin) =
    installModules(listOf(module("io.insert-koin:koin-core:$koinVersion")))
