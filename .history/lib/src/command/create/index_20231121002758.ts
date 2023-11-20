import { program } from "../../index";
import { create } from "./utils/index.ts";
import * as packageJSON from '../../../../package.json'
import { createArgsModel } from './command/create/types'

export const registerCreateCommand = () => {
    program
        // 定义命令 create 传参 <project-name>
        .command("create <project-name>")
        // 命令的描述信息
        .description('create a new project and name it, then you can select some options to init it')
        // 选项命令
        .option('-f, --force', 'overwrite target directory if it exist')
        .action((name, options) => {
            create({ name, options })
        })

    program
        .version(`v${packageJSON.version}`)
        .usage('<command> [option]')

    return program.parse(process.argv)
}

