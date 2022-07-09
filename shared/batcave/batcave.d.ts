type Nullable<T> = T | null | undefined
declare const __doNotImplementIt: unique symbol
type __doNotImplementIt = typeof __doNotImplementIt
export namespace me.user.shared {
    function helloWorld(message: string): string;
    class Greeting {
        constructor();
        greeting(): string;
    }
}
export namespace me.user.shared {
    class Test {
        constructor(name: string);
        get name(): string;
        static get Companion(): {
            serializer(): any/* kotlinx.serialization.KSerializer<me.user.shared.Test> */;
        };
        static get $serializer(): {
        } & any/* kotlinx.serialization.internal.GeneratedSerializer<me.user.shared.Test> */;
        component1(): string;
        copy(name?: string): me.user.shared.Test;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static Test_init_$Create$(seen1: number, name: Nullable<string>, serializationConstructorMarker: any/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): me.user.shared.Test;
    }
}
export namespace me.user.shared.database {
    function helloSQL(): void;
}
export as namespace batcave;