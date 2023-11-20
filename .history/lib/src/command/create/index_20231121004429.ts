import { program } from "../../index";
import { create } from "./utils/index.ts";
import { createArgsModel } from '../types/create.ts'
import { commandConfig } from "../types/command.ts";

export const createCommand: commandConfig = {
    command: "create <project-name>",
    description: "create a new project and name it, then you can select some options to init it",
    option: [
        { flags: '-f, --force', description: 'overwrite target directory if it exist' }
    ],
    action: create
}


export const registerCreateCommand = () => {
    program
        // 定义命令 create 传参 <project-name>
        .command("")
        // 命令的描述信息
        .description('')
        // 选项命令
        .option(,)
        .action((name, options) => {
            create({ name, options })
        })


    return program.parse(process.argv)
}

