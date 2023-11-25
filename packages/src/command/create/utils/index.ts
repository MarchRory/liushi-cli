const path = require("path")
const fsExtra = require('fs-extra')
const inquirer = require('inquirer')
const figlet = require('figlet')
const chalk = require("chalk")
import { createArgsModel } from "../../types/create";
import { chooseTemplate, chooseVersion, downloadTemplate } from '../../../generator/index'

export async function create(name: createArgsModel["name"] = 'my-app', options?: createArgsModel["options"]) {
    const cwd = process.cwd()

    const targetPath = path.join(cwd, name)
    if (fsExtra.existsSync(targetPath)) {
        if (options && options.force) {
            fsExtra.removeSync(targetPath)
        } else {
            let { isConfirm } = await inquirer.prompt([
                {
                    name: "isConfirm",
                    type: 'list',
                    message: 'Target folder already exists, which action do you want to pick?',
                    choices: [
                        { name: "Overwrite", value: true },
                        { name: "Cancel", value: false }
                    ]
                }
            ])
            if (isConfirm) {
                console.log("folder is Removing......")
                await fsExtra.removeSync(targetPath)
                console.log(`\r${chalk.green(`folder <${name}> is removed`)}`)
            }
        }
    }
    const chosenRepo = await chooseTemplate(name, targetPath)
    if (!chosenRepo) {
        console.log(`\r\n${chalk.red('get repo list failed')}`)
        return
    }
    const chosenVersion = await chooseVersion(chosenRepo)
    if (!chosenVersion) {
        console.log(`\r\n${chalk.red('get version list failed')}`)
        return
    }
    if (!chosenVersion) return
    downloadTemplate(chosenRepo, chosenVersion, targetPath)
        .then(() => {
            console.log('\r\n', figlet.textSync('LiuShi', {
                font: 'Ghost',
                width: 60,
                verticleLayout: 'default',
                horizontalLayout: 'default',
                WhitespaceBreak: true
            }))

            console.log(`\rCreate project ${chalk.yellow(name)} Successfully\r\n  \r\n${chalk.yellow('  First, follow these steps below')} `)
            console.log(`\r\n  1、cd ${chalk.yellow(name)}`)
            console.log(`\r\n  2、${'npm install'}`)
            console.log('\r\n  3、npm run dev')
            console.log(`${chalk.yellow('\r\n  Then, code happily~~\n')}`)
        })
        .catch((e) => {
            let errMessage = 'download template failed, please check you network or contact with us: \nhttps://github.com/MarchRory/liushi-cli/issues'
            console.log(e, `\n\n${chalk.red(errMessage)}`)
        })
}