plugins {
    kotlin("multiplatform")
}

group = "dev.shibasis"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
}

kotlin {
    jvm("generator") {
        compilations.all {
            kotlinOptions.jvmTarget = "11"
        }
    }
    js("compiler", IR) {
        binaries.executable()
        nodejs {

        }
    }
    sourceSets {
        val commonMain by getting
        val generatorMain by getting {
            dependencies {

            }
        }
        val compilerMain by getting {
            dependencies {
//                implementation(npm("typescript", "4.7.4", true))
            }
        }
    }
}
