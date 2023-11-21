import { create } from "./utils/index.ts";
import { program } from "../../index.ts";

program
    .command('create <project-name>')
    .description('create a new project and name it, then you can select some options to init it')
    .option('-f, --force', 'overwrite target directory if it exist')
    .action(create)