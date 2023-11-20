import { Command } from 'commander'
import * as packageJSON from '../../package.json'
import { create } from './command/create/index'
import { createArgsModel } from './command/create/types'
const initProgram = (): Command => {
    const program = new Command()
    program
        .name('liushi-cli')
        .description('An interesting frontend project cli')

    program
        // 定义命令
        .command("create <project-name>")
        // 命令的描述信息
        .description('create a new project and name it, then you can select some options to init it')
        // 选项命令
        .option('-f, --force', 'overwrite target directory if it exist')
        .action(async ({ name, options }: createArgsModel) => {
            await create({ name, options })
        })

    program
        .version(`v${packageJSON.version}`)
        .usage('<command> [option]')

    return program.parse(process.argv)
}
initProgram()