import { Command } from 'commander'
import * as packageJSON from '../../package.json'
import { commandList } from './command/register'

export const program = new Command()

const initProgram = (): Command => {

    program
        .name('liushi-cli')
        .description('An interesting frontend project cli')



    program
        .version(`v${packageJSON.version}`)
        .usage('<command> [option]')
    return program.parse(process.argv)
}
initProgram()