import {Command} from '@oclif/core'
import * as tsc from 'typescript'
import * as path from "path";
import {readFileSync} from "fs";

export default class Compile extends Command {
    static description = 'Generate Kotlin Interfaces from TypeScript Interfaces'
    static examples = []
    static flags = {}
    static args = [
        {
            name: 'file',
            description: 'Generate KT from TS',
            default: 'full',
        }
    ]

    async run(): Promise<void> {
        const { args } = await this.parse(Compile)
        const file = path.join(process.cwd(), args["file"]);

        const program = tsc.createSourceFile(
            file,
            readFileSync(file).toString(),
            tsc.ScriptTarget.ES2015,
            true
        );
        tsc.forEachChild(program, (node) => {
            if (node.kind === tsc.SyntaxKind.InterfaceDeclaration) {
                tsc.forEachChild(node, (node) => {
                    if (node.kind === tsc.SyntaxKind.PropertySignature) {
                        tsc.forEachChild(node, (node) => {
                            this.log(node.kind.toString(), node.getText())
                        })

                    }
                })
            }
        })

    }
}
