buildscript {
    repositories {
        gradlePluginPortal()
        google()
        mavenCentral()
    }
    dependencies {
        classpath("org.jetbrains.kotlin:kotlin-gradle-plugin:1.7.0")
        classpath("org.jetbrains.kotlin:kotlin-serialization:1.7.0")
        classpath("com.android.tools.build:gradle:4.1.2")
        classpath("com.squareup.sqldelight:gradle-plugin:1.5.3")
    }
}

group = "me.user"
version = "1.0-SNAPSHOT"

allprojects {
    repositories {
        google()
        jcenter()
        mavenCentral()
    }
}
