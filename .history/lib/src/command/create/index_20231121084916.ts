import { create } from "./utils/index.ts";
import { commandConfig } from "../types/command.ts";
import { Command } from "commander";

const createCommand = new Command('create')

createCommand.command('create <project-name>')
    .description('create a new project and name it, then you can select some options to init it')
    .option('-f, --force', 'overwrite target directory if it exist')
    .action(create)