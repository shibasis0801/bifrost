import dev.shibasis.bifrost.web.*
import dev.shibasis.bifrost.android.*
import dev.shibasis.bifrost.common.*
import dev.shibasis.bifrost.*
plugins {
    kotlin("multiplatform")
    id("dev.shibasis.bifrost.plugin")
    id("com.android.library")
}

group = "dev.nixlord.pravega"
version = "1.0"

repositories {
    google()
    mavenCentral()
}

kotlin {
    web()
    droid()
    sourceSets {
        val commonMain by getting { commonRequire {
        } }
        val commonTest by getting { testRequire() }
        val jsMain by getting { webRequire {
            webCoroutines()
            react()
        }}
        val androidMain by getting { androidRequire {
            basic()
        }}
    }
}

android {
    kmmAndroidApply()
}
