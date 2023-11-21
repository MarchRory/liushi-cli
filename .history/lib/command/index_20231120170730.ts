const { Command } = require("commander")
const program = new Command()
program
    // 定义命令
    .commmand("create <project-name>")
    // 命令的描述信息
    .description('create a new project and name it')
    // 选项命令
    .option('-f, --force', 'overwrite target directory if it exist')
    .action((name: string, options) => {
        console.log('name:', name, 'options:', options)
    })

program
    .version(`v${require('../../package.json').version}`)
    .usage('<command> [option]')

program.parse(process.argv)

module.exports = { program }