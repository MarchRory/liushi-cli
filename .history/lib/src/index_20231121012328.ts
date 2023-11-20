import { Command } from 'commander'
import * as packageJSON from '../../package.json'
import { commandList } from './command/register/index.ts'

export var program = new Command()

const initProgram = (): Command => {
    program
        .name('liushi-cli')
        .description('An interesting frontend project cli')

    for (let i = 0; i < commandList.length; i++) {
        program.command(commandList[i].command)
            .description(commandList[i].description)
            .option(commandList[i].option[0].flags, commandList[i].option[0].description)
            .action(commandList[i].action)
        commandList[i].option.forEach((opt) => {
            program = program.option(opt.flags, opt.description)
        })
        program.action(commandList[i].action)
    }

    program
        .version(`v${packageJSON.version}`)
        .usage('<command> [option]')
    return program.parse(process.argv)
}
initProgram()