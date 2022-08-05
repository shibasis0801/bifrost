package dev.shibasis.bifrost.android
import com.android.build.gradle.internal.dsl.BaseAppModuleExtension
import com.android.build.gradle.LibraryExtension
import dev.shibasis.bifrost.Version
import org.gradle.api.JavaVersion
import org.gradle.kotlin.dsl.get
import org.jetbrains.kotlin.gradle.dsl.KotlinJvmOptions
import org.jetbrains.kotlin.gradle.dsl.KotlinMultiplatformExtension
import org.jetbrains.kotlin.gradle.plugin.mpp.KotlinAndroidTarget

/*
Needs a lot of improvements
Right now it just hides things
 */
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

fun BaseAppModuleExtension.androidApply(appID: String) {
    compileSdk = Version.SDK.compileSdk

    defaultConfig {
        applicationId = appID
        minSdk = Version.SDK.minSdk
        targetSdk = Version.SDK.targetSdk
        versionCode = 1
        versionName = "1.0"

        testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
        vectorDrawables {
            useSupportLibrary = true
        }
    }
    compileOptions {
        sourceCompatibility = Version.SDK.Java.asEnum
        targetCompatibility = Version.SDK.Java.asEnum
    }

    buildFeatures {
        compose = true
    }
    composeOptions {
        kotlinCompilerExtensionVersion = Version.Compose
    }

    buildTypes {
        release {
            isMinifyEnabled = false
            proguardFiles(getDefaultProguardFile("proguard-android-optimize.txt"), "proguard-rules.pro")
        }
    }
}


fun LibraryExtension.libraryDefaults() {
    compileSdk = Version.SDK.compileSdk
    defaultConfig {
        minSdk = Version.SDK.minSdk
        targetSdk = Version.SDK.targetSdk

        testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
        consumerProguardFiles("consumer-rules.pro")
    }

    buildTypes {
        release {
            isMinifyEnabled = false
            proguardFiles(
                getDefaultProguardFile("proguard-android-optimize.txt"),
                "proguard-rules.pro"
            )
        }
    }
    compileOptions {
        sourceCompatibility = Version.SDK.Java.asEnum
        targetCompatibility = Version.SDK.Java.asEnum
    }
}

fun KotlinMultiplatformExtension.droid(configure: KotlinAndroidTarget.() -> Unit = {}) {
    android {
        publishLibraryVariants("release", "debug")
        compilations.all {
            kotlinOptions.jvmTarget = Version.SDK.Java.asString
        }
        configure()
    }
}

