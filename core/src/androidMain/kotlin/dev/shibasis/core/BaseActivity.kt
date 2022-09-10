package dev.shibasis.core

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.lifecycle.DefaultLifecycleObserver

import org.koin.core.context.loadKoinModules
import org.koin.dsl.module
import java.lang.ref.WeakReference

typealias BaseRef = WeakReference<BaseActivity>
typealias BaseObserver = DefaultLifecycleObserver

abstract class BaseActivity : AppCompatActivity() {

    fun connectLifecycle(vararg observers: BaseObserver) {
        observers.forEach { lifecycle.addObserver(it) }
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        loadKoinModules(module {
            single { WeakReference(this@BaseActivity) }
        })
    }
}
