import { createCommand } from "../create/index.ts";
import { commandConfig } from "../types/command.ts";


/**
 * 注册的命令列表
 */
const commandList: commandConfig[] = [
    createCommand
]