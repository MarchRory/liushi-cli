import { Command } from 'commander'
import * as packageJSON from '../../package.json'
import commandPath from './register'
const figlet = require('figlet')
const chalk = require("chalk")
// import chalk from 'chalk'

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
            console.log(`\n\r Run ${chalk.magenta(`liushi-cli <command> --help`)} for the usage of given command`)
        })

    // 批量注册命令
    for (let path of commandPath.keys()) {
        require(`${path}`)
    }

    program
        .version(`v${packageJSON.version}`)
        .usage('<command> [option]')

    return program.parse(process.argv)
}

initProgram()