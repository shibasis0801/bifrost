package dev.shibasis.promise

import kotlin.js.Promise

actual class Completable<T> {
    val promise: Promise<T>

    constructor(executor: ResolveReject<T>) {
        promise = Promise(executor)
    }

    constructor(newPromise: Promise<T>) {
        promise = newPromise
    }

    actual fun <R> then(onFulfilled: ((T) -> R)?) = Completable(promise.then(onFulfilled))

    actual fun <R> catch(onRejected: (Throwable) -> R) = Completable(promise.catch(onRejected))


    actual companion object {
        actual fun <T> resolve(value: T) = Completable(Promise.resolve(value))
        actual fun reject(error: Throwable) = Completable(Promise.reject(error))

    }
}
fun<T> Promise<T>.toCompletable() = Completable(this)