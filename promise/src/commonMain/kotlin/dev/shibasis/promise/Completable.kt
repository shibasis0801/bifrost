package dev.shibasis.promise

/*

expect Completable
AsyncInterface
ExecutionInterface

 */

typealias ResolveReject<T> = (resolve: (T) -> Unit, reject: (Throwable) -> Unit) -> Unit


expect class Completable<T> {

    public fun<R> then(onFulfilled: ((T) -> R)?): Completable<R>
    public fun<R> catch(onRejected: ((Throwable) -> R)): Completable<R>

    companion object {
        public fun<T> resolve(value: T): Completable<T>
        public fun reject(error: Throwable): Completable<Nothing>
    }
}