plugins {
    kotlin("multiplatform")
    id("com.android.application")
}

group = "com.myntra.appscore"
version = "1.0-SNAPSHOT"

kotlin {
    android()
    sourceSets {
        val androidMain by getting {
            dependencies {
//                implementation(project(":shared"))
                api(project(":database"))
                implementation("com.facebook.react:react-native:0.68.2")
                implementation("com.google.android.material:material:1.2.1")
                implementation("androidx.appcompat:appcompat:1.2.0")
                implementation("androidx.constraintlayout:constraintlayout:2.0.2")

                val lifecycle_version = "2.6.0-alpha01"
                val arch_version = "2.1.0"

                // ViewModel
                implementation("androidx.lifecycle:lifecycle-viewmodel-ktx:$lifecycle_version")
                // ViewModel utilities for Compose
                implementation("androidx.lifecycle:lifecycle-viewmodel-compose:$lifecycle_version")
                // LiveData
                implementation("androidx.lifecycle:lifecycle-livedata-ktx:$lifecycle_version")
                // Lifecycles only (without ViewModel or LiveData)
                implementation("androidx.lifecycle:lifecycle-runtime-ktx:$lifecycle_version")

                // Saved state module for ViewModel
                implementation("androidx.lifecycle:lifecycle-viewmodel-savedstate:$lifecycle_version")

                // optional - helpers for implementing LifecycleOwner in a Service
                implementation("androidx.lifecycle:lifecycle-service:$lifecycle_version")

                // optional - ProcessLifecycleOwner provides a lifecycle for the whole application process
                implementation("androidx.lifecycle:lifecycle-process:$lifecycle_version")
            }
        }
    }
}

android {
    compileSdkVersion(31)
    defaultConfig {
        applicationId = "com.myntra.appscore.android"
        minSdkVersion(24)
        targetSdkVersion(31)
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