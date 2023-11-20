import { Command } from 'commander'
import * as packageJSON from '../../package.json'
import { commandList } from './command/register/index.ts'

export const program = new Command()

const initProgram = (): Command => {

    program
        .name('liushi-cli')
        .description('An interesting frontend project cli')

    const configKeys = ['command', 'description', 'option', 'action']
    for (let i = 0; i < commandList.length; i++) {

    }

    program
        .version(`v${packageJSON.version}`)
        .usage('<command> [option]')
    return program.parse(process.argv)
}
initProgram()