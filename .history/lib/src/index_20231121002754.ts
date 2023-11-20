import { Command } from 'commander'

export const program = new Command()

const initProgram = (): Command => {

    program
        .name('liushi-cli')
        .description('An interesting frontend project cli')

    return program.parse(process.argv)
}
initProgram()