import { Command } from 'commander'
import * as packageJSON from '../../package.json'
import { create } from './command/create/index'
import { createArgsModel } from './command/create/types'
export const program = new Command()

const initProgram = (): Command => {
    const program = new Command()

    program
        .name('liushi-cli')
        .description('An interesting frontend project cli')
}
initProgram()