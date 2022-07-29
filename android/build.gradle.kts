plugins {
    kotlin("multiplatform")
    id("com.android.application")
    id("com.facebook.react")
    id("dev.shibasis.bifrost.plugin")
}

buildscript {
    extra.apply {
        set("react", mapOf(
            "enableHermes" to true,
            "root" to "../"
        ))
    }
}

group = "com.myntra.appscore"
version = "1.0-SNAPSHOT"

kotlin {
    android()
    sourceSets {
        val androidMain by getting {
            dependencies {
                api(project(":database"))
                api(project(":ReactAndroid"))

                implementation("com.google.android.material:material:1.2.1")
                implementation("androidx.appcompat:appcompat:1.2.0")
                implementation("androidx.constraintlayout:constraintlayout:2.0.2")

                val lifecycle_version = "2.4.0"
                implementation("androidx.lifecycle:lifecycle-runtime-ktx:$lifecycle_version")
                implementation("androidx.lifecycle:lifecycle-service:$lifecycle_version")
                implementation("androidx.lifecycle:lifecycle-process:$lifecycle_version")
            }
        }
    }
}

android {
    compileSdkVersion(32)
    defaultConfig {
        applicationId = "com.myntra.appscore.android"
        minSdkVersion(24)
        targetSdkVersion(32)
        versionCode = 1
        versionName = "1.0"
    }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_11
        targetCompatibility = JavaVersion.VERSION_11
    }
    buildTypes {
        getByName("release") {
            isMinifyEnabled = false
        }
    }
}

apply(from = file("../node_modules/@react-native-community/cli-platform-android/native_modules.gradle"));
val applyNativeModulesAppBuildGradle = extensions.extraProperties("applyNativeModulesAppBuildGradle") as Closure<Any>
applyNativeModulesAppBuildGradle(project)
