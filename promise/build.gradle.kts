plugins {
    kotlin("multiplatform")
    kotlin("native.cocoapods")
    id("maven-publish")
    id("dev.shibasis.bifrost.plugin")
}

group = "dev.shibasis"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
}

kotlin {
    js(IR) {
        moduleName = "promise"
        compilations["main"].packageJson {

        }
        browser {
            distribution {
                directory = File("$projectDir/promise")
            }
            webpackTask {
                outputFileName = "promise.js"
                output.libraryTarget = "commonjs2"
            }
        }
        binaries.executable()
    }
    jvm {
        compilations.all {
            kotlinOptions.jvmTarget = "11"
        }
        withJava()
    }
    ios() {
        binaries {
            framework {
                baseName = "library"
            }
        }
    }

    cocoapods {
        summary = "Some description for the promise Module"
        homepage = "Link to the promise Module homepage"
        ios.deploymentTarget = "14.1"
        podfile = project.file("../iosApp/Podfile")
        framework {
            baseName = "promise"
        }

    }

    sourceSets {
        all {
            languageSettings.apply {
                optIn("kotlin.js.ExperimentalJsExport")
            }
        }

        val commonMain by getting
        val commonTest by getting {
            dependencies {
                implementation(kotlin("test"))
            }
        }
        val jsMain by getting
        val jvmMain by getting
        val iosMain by getting
    }
}