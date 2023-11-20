import { Command } from "commander"
import packageJSON from '../package.json' assert { type: "json" }
import { create } from './command/index.ts'


function initProgram() {
    const program = new Command()
    program
        .name('liushi-cli')
        .description('An interesting frontend project cli')
        .version('1.0.0')

    program
        // 定义命令
        .command("create <project-name>")
        // 命令的描述信息
        .description('create a new project and name it, then you will select some options to init it')
        // 选项命令
        .option('-f, --force', 'overwrite target directory if it exist')
        .action(async (name, options) => {
            await create({ name, options })
        })

    program
        .version(`v${packageJSON.version}`)
        .usage('<command> [option]')

    return program.parse(process.argv)
}

export { initProgram }