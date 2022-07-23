plugins {
    id("java-gradle-plugin")
    kotlin("jvm") version "1.7.10"
}

repositories {
    google()
    mavenCentral()
}

dependencies {
    // Align versions of all Kotlin components
    implementation(platform("org.jetbrains.kotlin:kotlin-bom"))
    implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
}

gradlePlugin {
    // Define the plugin
    val plugin by plugins.creating {
        id = "dev.shibasis.bifrost.plugin"
        implementationClass = "dev.shibasis.bifrost.BifrostPlugin"
    }
}
