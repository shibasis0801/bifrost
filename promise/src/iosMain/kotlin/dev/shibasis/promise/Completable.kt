package dev.shibasis.promise

import platform.darwin.DISPATCH_QUEUE_CONCURRENT
import platform.darwin.dispatch_async
import platform.darwin.dispatch_queue_concurrent_t

actual class Completable<T>  {
    actual fun <R> then(onFulfilled: ((T) -> R)?): Completable<R> {
        TODO("Not yet implemented")
    }

    fun t() {
        val x =
            dispatch_async(dispatch_queue_concurrent_t()) {
                2 + 2
            }
    }

    actual fun <R> catch(onRejected: (Throwable) -> R): Completable<R> {
        TODO("Not yet implemented")
    }

    actual companion object {
        actual fun <T> resolve(value: T): Completable<T> {
            TODO("Not yet implemented")
        }

        actual fun reject(error: Throwable): Completable<Nothing> {
            TODO("Not yet implemented")
        }
    }

}