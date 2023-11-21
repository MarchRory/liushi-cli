import { Command } from 'commander'
import * as packageJSON from '../../package.json'
import commandPath from './register'

export var program = new Command()

const initProgram = (): Command => {
    program
        .name('liushi-cli')
        .description('An interesting frontend project cli')

    // 批量注册命令
    for (let i = 0; i < commandPath.length; i++) {
        require(`${commandPath[i]}`)
    }

    program
        .version(`v${packageJSON.version}`)
        .usage('<command> [option]')
    return program.parse(process.argv)
}
initProgram()