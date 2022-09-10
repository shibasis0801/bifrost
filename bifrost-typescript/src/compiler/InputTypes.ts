export interface ParamType {
    name: string,
    type: string
}
export function Param(name: string, type: string): ParamType {
    return { name, type }
}

export interface Function {
    name: string,
    params: ParamType[]
    returnType: string
}

export interface IFunctionGenerator {
    toString(fn: Function): string
}

/*
Implement for Kotlin, C++ and ObjectiveC
 */

type TypeTargets = {
    cpp: string, objc: string, kotlin: string
}
const TypeMap: { [key: string]: TypeTargets } = {
    "number": { // support integer vs float later
        cpp: "double",
        kotlin: "Double",
        objc: "NSNumber"
    }
}

export class CPPGenerator implements IFunctionGenerator {
    toString(fn: Function): string {
        const returnType = TypeMap[fn.returnType]
        const argumentList = fn.params.map(param => (
            `${TypeMap[param.type]} ${param.name}`
        )).join(",")
        return `
             ${returnType} ${fn.name}(${argumentList}) {
                
             }
        `.replace(/^  +/g, '');
    }
}
