
plugins {
    kotlin("multiplatform")
    kotlin("native.cocoapods")
    kotlin("plugin.serialization")
    id("com.squareup.sqldelight")
}

group = "me.user"
version = "1.0-SNAPSHOT"

kotlin {
    jvm {
        compilations.all {
            kotlinOptions.jvmTarget = "11"
        }
    }
    ios()
    js(IR) {
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
        all {
            languageSettings.apply {
                optIn("kotlin.js.ExperimentalJsExport")
            }
        }

        val commonMain by getting {
            dependencies {
                implementation("org.jetbrains.kotlinx:kotlinx-serialization-core:1.2.2")
                implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core:1.6.3")
                implementation("com.squareup.sqldelight:runtime:1.5.3")

            }
        }
        val commonTest by getting {
            dependencies {
                implementation(kotlin("test"))
            }
        }
        val jvmMain by getting {
            dependencies {
                implementation("com.squareup.sqldelight:sqlite-driver:1.5.3")

            }
        }
        val iosMain by getting {
            dependencies {
                implementation("com.squareup.sqldelight:native-driver:1.5.3")
            }
        }
        val jsMain by getting {
            dependencies {
                implementation(devNpm("copy-webpack-plugin", "11.0.0"))
                implementation("com.squareup.sqldelight:sqljs-driver:1.5.3")
            }
        }

    }
}

sqldelight {
    database("BatcaveDB") {
        packageName = "me.user.shared"
    }
}
