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