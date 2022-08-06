import dev.shibasis.bifrost.web.*
import dev.shibasis.bifrost.android.*
import dev.shibasis.bifrost.common.*
import dev.shibasis.bifrost.*

plugins {
    id("com.android.application")
    id("org.jetbrains.kotlin.android")
    id("dev.shibasis.bifrost.plugin")
}

android {
    androidApply("dev.shibasis.overlord.lab")
    kotlinOptions {
        jvmTarget = Version.SDK.Java.asString

        freeCompilerArgs += listOf(
            "-P",
            "plugin:androidx.compose.compiler.plugins.kotlin:suppressKotlinVersionCompatibilityCheck=true"
        )
    }

    packagingOptions {
        resources {
            excludes += "/META-INF/{AL2.0,LGPL2.1}"
        }
    }
}


dependencies {
    basic()
    extensions()
    lifecycle()
    androidCompose()
}
