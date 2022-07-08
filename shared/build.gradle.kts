plugins {
    kotlin("multiplatform")
    kotlin("native.cocoapods")
    kotlin("plugin.serialization")
    id("com.android.library")
}

group = "me.user"
version = "1.0-SNAPSHOT"

kotlin {
    android()
    ios()
    js("web", IR) {
        moduleName = "batcave"
        compilations["main"].packageJson {

        }
        browser {
            distribution {
                directory = File("$projectDir/batcave")
            }
            webpackTask {
                this.
                outputFileName = "batcave.js"
                output.libraryTarget = "commonjs2"
            }
        }
        binaries.executable()
    }

    cocoapods {
        summary = "Some description for the Shared Module"
        homepage = "Link to the Shared Module homepage"
        ios.deploymentTarget = "14.1"
        podfile = project.file("../iosApp/Podfile")
        framework {
            baseName = "shared"
        }
    }

    sourceSets {
        val commonMain by getting {
            dependencies {
                implementation("org.jetbrains.kotlinx:kotlinx-serialization-core:1.2.2")
            }
        }
        val commonTest by getting {
            dependencies {
                implementation(kotlin("test"))
            }
        }
        val androidMain by getting {
            dependencies {
                implementation("com.google.android.material:material:1.2.1")
            }
        }
        val iosMain by getting
        val webMain by getting {
            dependencies {
                implementation(devNpm("copy-webpack-plugin", "11.0.0"))
            }
        }

    }
}

android {
    compileSdkVersion(29)
    sourceSets["main"].manifest.srcFile("src/androidMain/AndroidManifest.xml")
    defaultConfig {
        minSdkVersion(24)
        targetSdkVersion(29)
    }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_11
        targetCompatibility = JavaVersion.VERSION_11
    }
}