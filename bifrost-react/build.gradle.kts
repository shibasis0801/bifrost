import dev.shibasis.bifrost.web.*
import dev.shibasis.bifrost.android.*
import dev.shibasis.bifrost.common.*
import dev.shibasis.bifrost.*
import groovy.lang.Closure

plugins {
    id("com.android.library")
    id("org.jetbrains.kotlin.android")
    id("dev.shibasis.bifrost.plugin")
    id("com.facebook.react")
}

react {
    libraryName.set("bifrost-react")
    codegenJavaPackageName.set("dev.shibasis.bifrost.react")
    jsRootDir.set(File("../"))
    reactRoot.set(File("../node_modules/react-native/"))
    codegenDir.set(File("../node_modules/react-native-codegen/"))
}

android {
    libraryDefaults(file("CMakeLists.txt"))
    kotlinOptions {
        jvmTarget = Version.SDK.Java.asString

        freeCompilerArgs += listOf(
            "-P",
            "plugin:androidx.compose.compiler.plugins.kotlin:suppressKotlinVersionCompatibilityCheck=true"
        )
    }

    packagingOptions {
        resources {
            excludes += "/META-INF/{AL2.0,LGPL2.1}"
        }
    }

    sourceSets["main"].java {
        srcDir("build/generated/source/codegen/java")
    }

}


dependencies {
    api(project(":database"))
    api(project(":ReactAndroid"))
    basic()
    extensions()
    lifecycle()
    androidCompose()
}

apply(from = file("../node_modules/@react-native-community/cli-platform-android/native_modules.gradle"));
val applyNativeModulesAppBuildGradle = project.extra["applyNativeModulesAppBuildGradle"] as Closure<Any>
applyNativeModulesAppBuildGradle(project)
