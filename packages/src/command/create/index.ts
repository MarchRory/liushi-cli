import { create } from "./utils/index";
import { program } from "../../index";

program
    .command('create <project-name>')
    .description('create a new project and name it, then you can select some options to init it')
    .option('-f, --force', 'overwrite target directory if it exist')
    .action(create)