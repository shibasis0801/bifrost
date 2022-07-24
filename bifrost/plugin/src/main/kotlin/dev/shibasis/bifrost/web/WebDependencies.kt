package dev.shibasis.bifrost.web

import dev.shibasis.bifrost.Version
import org.jetbrains.kotlin.gradle.plugin.KotlinDependencyHandler


fun KotlinDependencyHandler.webCoroutines(
    coroutines_version: String = Version.Coroutines
) {
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core:${coroutines_version}")
}
