import { Command } from 'commander'
import commandPath from './register'
const figlet = require('figlet')
const chalk = require("chalk")

export var program = new Command()

const initProgram = (): Command => {
    program
        .name('liushi-cli')
        .description('An interesting frontend project cli')
        .on('--help', () => {
            console.log('\r\n', figlet.textSync('LiuShi', {
                font: 'Ghost',
                width: 60,
                verticleLayout: 'default',
                horizontalLayout: 'default',
                WhitespaceBreak: true
            }))
            console.log(`\n\r Run ${chalk.cyan(`liushi-cli <command> --help`)} for the usage of given command`)
        })
    for (let path of commandPath.keys()) {
        require(`${path}`)
    }
    return program.parse(process.argv)
}

initProgram()