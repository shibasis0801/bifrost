package com.myntra.appscore.androidApp

import android.content.Intent
import android.os.Bundle
import android.util.Log
import android.view.KeyEvent
import androidx.appcompat.app.AppCompatActivity
import com.myntra.appscore.database.*

class MainActivity : BaseActivity() {
    lateinit var reactAdapter: ReactAdapter
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        reactAdapter = ReactAdapter(this) {
            setContentView(it)
        }
        connectLifecycle(reactAdapter)

        Log.d("", "SHIBASIS")


        val driver = createDriver(this)
        val database = SQLDatabase(driver)
        runQuery(database)
    }

    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        super.onActivityResult(requestCode, resultCode, data)
        reactAdapter.onPermissionResult(this, requestCode, resultCode, data)
    }
}
