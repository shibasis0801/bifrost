import groovy.lang.Closure

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

include(":bifrost-react")
//include(":database")
//include(":overlord-lab")
includeBuild("bifrost")
includeBuild("node_modules/react-native-gradle-plugin")



apply(from = file("node_modules/@react-native-community/cli-platform-android/native_modules.gradle"));
val applyNativeModulesSettingsGradle = extra["applyNativeModulesSettingsGradle"] as Closure<Any>
applyNativeModulesSettingsGradle(settings)

