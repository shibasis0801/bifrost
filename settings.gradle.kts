rootProject.name = "batcave"

pluginManagement {
    repositories {
        google()
        gradlePluginPortal()
        mavenCentral()
    }
}

include(":ReactAndroid")
project(":ReactAndroid").projectDir = file("node_modules/react-native/ReactAndroid")

//include(":android")
include(":database")
//include(":promise")

includeBuild("bifrost")
includeBuild("node_modules/react-native-gradle-plugin")



apply(from = file("node_modules/@react-native-community/cli-platform-android/native_modules.gradle"));
val applyNativeModulesSettingsGradle = extra.get("applyNativeModulesSettingsGradle") as groovy.lang.Closure<Any>
applyNativeModulesSettingsGradle(settings)

