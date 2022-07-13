plugins {
    kotlin("multiplatform")
    id("com.android.application")
}

group = "me.user"
version = "1.0-SNAPSHOT"

kotlin {
    android()
    sourceSets {
        val androidMain by getting {
            dependencies {
                implementation(project(":shared"))
                implementation(project(":database"))
                implementation("com.google.android.material:material:1.2.1")
                implementation("androidx.appcompat:appcompat:1.2.0")
                implementation("androidx.constraintlayout:constraintlayout:2.0.2")
                implementation("com.squareup.sqldelight:android-driver:1.5.3")
            }
        }
    }
}

android {
    compileSdkVersion(29)
    defaultConfig {
        applicationId = "me.user.androidApp"
        minSdkVersion(24)
        targetSdkVersion(29)
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