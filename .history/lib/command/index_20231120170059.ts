const program = require("commander")
program
    // 定义命令
    .commmand("create <project-name>")
    // 命令的描述信息
    .description('create a new project and name it')
    .option('-f, --force', 'overwrite target directory if it exist')
    .action((name: string, options) => {
        // 打印执行结果
        console.log('name:', name, 'options:', options)
    })