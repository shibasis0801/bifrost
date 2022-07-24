package dev.shibasis.bifrost.android
import com.android.build.gradle.internal.dsl.BaseAppModuleExtension
import com.android.build.gradle.LibraryExtension
import dev.shibasis.bifrost.Version
import org.gradle.api.JavaVersion
import org.gradle.kotlin.dsl.get
import org.jetbrains.kotlin.gradle.dsl.KotlinJvmOptions
import org.jetbrains.kotlin.gradle.dsl.KotlinMultiplatformExtension
import org.jetbrains.kotlin.gradle.plugin.mpp.KotlinAndroidTarget

fun LibraryExtension.kmmAndroidApply() {
    compileSdk = Version.SDK.compileSdk
    sourceSets["main"].manifest.srcFile("src/androidMain/AndroidManifest.xml")
    defaultConfig {
        minSdk = Version.SDK.minSdk
        targetSdk = Version.SDK.targetSdk
    }
    compileOptions {
        sourceCompatibility = Version.SDK.Java.asEnum
        targetCompatibility = Version.SDK.Java.asEnum
    }
}

fun BaseAppModuleExtension.androidApply() {
    compileSdk = Version.SDK.compileSdk
    sourceSets["main"].manifest.srcFile("src/androidMain/AndroidManifest.xml")
    defaultConfig {
        minSdk = Version.SDK.minSdk
        targetSdk = Version.SDK.targetSdk
    }
    compileOptions {
        sourceCompatibility = Version.SDK.Java.asEnum
        targetCompatibility = Version.SDK.Java.asEnum
    }
}


fun LibraryExtension.libraryDefaults() {
    compileSdk = Version.SDK.compileSdk
    defaultConfig {
        minSdk = Version.SDK.minSdk
        targetSdk = Version.SDK.targetSdk

        testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
//        consumerProguardFiles("consumer-rules.pro")
    }

    buildTypes {
        release {
            isMinifyEnabled = false
//            proguardFiles(
//                getDefaultProguardFile("proguard-android-optimize.txt"),
//                "proguard-rules.pro"
//            )
        }
    }
    compileOptions {
        sourceCompatibility = Version.SDK.Java.asEnum
        targetCompatibility = Version.SDK.Java.asEnum
    }
}

fun KotlinMultiplatformExtension.droid(configure: KotlinAndroidTarget.() -> Unit = {}) {
    android {
        compilations.all {
            kotlinOptions.jvmTarget = Version.SDK.Java.asString
        }
        configure()
    }
}
