package dev.shibasis.promise

import java.util.concurrent.CompletableFuture

/*
then ->
thenApply
thenCombine
thenCompose
thenAccept
catch ->
exceptionally
resolve ->
complete
reject ->
completeExceptionally
all ->
allOf
resolve/reject
supplyAsync -> complete/completeExceptionally
 */

actual class Completable<T> {
    private val future: CompletableFuture<T>

    fun getFuture() = future
    fun fromFuture(future: CompletableFuture<T>) = Completable(future)

    constructor(resolveReject: ResolveReject<T>) {
        future = CompletableFuture<T>().apply {
            resolveReject(::complete, ::completeExceptionally)
        }
    }

    constructor(newFuture: CompletableFuture<T>) {
        future = newFuture
    }

    // Should be thenCompose, read more
    actual fun <R> then(onFulfilled: ((T) -> R)?) = Completable<R>(future.thenApplyAsync(onFulfilled))
    actual fun <R> catch(onRejected: (Throwable) -> R) = Completable<R>(future.handle { _, u -> onRejected(u) })


    actual companion object {
        actual fun <T> resolve(value: T) = Completable { resolve, _ -> resolve(value)  }
        actual fun reject(error: Throwable) = Completable<Nothing> { _, reject -> reject(error) }
    }
}
