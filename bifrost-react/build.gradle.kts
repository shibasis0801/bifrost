import dev.shibasis.bifrost.android.kmmAndroidApply
import dev.shibasis.bifrost.android.droid
plugins {
    kotlin("multiplatform")
    kotlin("native.cocoapods")
    id("com.android.library")
    id("dev.shibasis.bifrost.plugin")
}

group = "dev.shibasis"
version = "1.0-SNAPSHOT"

kotlin {
    droid()
    ios()
    cocoapods {
        summary = "Common Repo for React Turbo Module integration"
        ios.deploymentTarget = "14.1"
        framework {
            baseName = "bifrost-react"
        }
    }
    sourceSets {
        val commonMain by getting
        val androidMain by getting {
            dependencies {

            }
        }
        val iosMain by getting
    }
}

android {
    kmmAndroidApply()
}