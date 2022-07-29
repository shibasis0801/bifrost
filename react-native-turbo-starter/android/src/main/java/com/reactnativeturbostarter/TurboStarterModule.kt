package com.reactnativeturbostarter

import android.content.Context
import android.content.Context.BATTERY_SERVICE
import android.os.BatteryManager
import com.facebook.react.bridge.*
import com.myntra.appscore.database.SQLDatabase
import com.myntra.appscore.database.DriverProvider
import com.myntra.appscore.database.getItems
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch



fun fetchData(context: Context, promise: Promise): SQLDatabase {
    val driver = DriverProvider(context)
    return SQLDatabase(driver)
}

class TurboStarterModule(reactContext: ReactApplicationContext?) :
    NativeTurboStarterSpec(reactContext) {

    private val batteryManager: BatteryManager? by lazy {
        reactContext?.getSystemService(BATTERY_SERVICE) as BatteryManager
    }

    private val database: SQLDatabase by lazy {
        SQLDatabase(DriverProvider(reactContext!!.applicationContext))
    }

        override fun getGreeting(name: String): String {
            return String.format("Hello, %s!", name)
        }

        override fun getTurboArray(values: ReadableArray): WritableArray {
            val array = values.toArrayList()
            array.reverse()
            val reversed = WritableNativeArray()

            for (item in array) {
                if (item !is String) {
                    continue
                }

                reversed.pushString(item)
            }
            return reversed
        }

        override fun getTurboObject(options: ReadableMap): WritableMap {
            val obj = WritableNativeMap()
            obj.putString("helloString", "Hello, World!")
            obj.putInt("magicNumber", 42)
            obj.putString("response", "res")
            return obj
        }

        override fun getTurboObjectGeneric(options: ReadableMap): WritableMap {
            val obj = WritableNativeMap()
            val input = options.getInt("magicNumber")

            obj.putInt("magicNumber", input * 6)
            return obj
        }

        override fun getTurboPromise(magicNumber: Double, promise: Promise) {
            when (magicNumber) {
                42.0 -> {
                    promise.resolve(true)
                }
                7.0 -> {
                    promise.reject("1", "You stepped on a mine")
                }
                else -> {
                    promise.resolve(false)
                }
            }
        }

        override fun getSQLRecord(promise: Promise) {
            GlobalScope.launch(Dispatchers.IO) {
                val result = WritableNativeArray()
                getItems(database)
                    .forEach { result.pushString(it) }

                promise.resolve(result)
            }
        }

        override fun getBatteryLevel(): Double {
            return batteryManager?.getIntProperty(BatteryManager.BATTERY_PROPERTY_CAPACITY)?.toDouble()
                ?: .0
        }

        override fun turboMultiply(num1: Double, num2: Double): Double {
            return nativeMultiply(num1, num2)
        }

        override fun getName(): String {
            return NAME
        }

        private external fun nativeMultiply(num1: Double, num2: Double): Double

        companion object {
        const val NAME = "TurboStarter"

        init {
            System.loadLibrary("reactnativeturbostarter-jni")
        }
    }
}
