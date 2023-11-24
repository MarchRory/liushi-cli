const path = require("path")
const fsExtra = require('fs-extra')
const inquirer = require('inquirer')
const chalk = require("chalk")
import { createArgsModel } from "../../types/create.ts";
import { chooseTemplate, chooseVersion, downloadTemplate } from '../../../generator/index.ts'

export async function create(name: createArgsModel["name"] = 'my-app', options?: createArgsModel["options"]) {
    // 获取当前所在目录
    const cwd = process.cwd()

    // 拼接待创建项目的地址
    const targetPath = path.join(cwd, name)
    // 是否强制覆盖
    if (fsExtra.existsSync(targetPath)) {
        if (options && options.force) {
            // 启用强制覆盖, 移除原有目录结构
            fsExtra.removeSync(targetPath)
        } else {
            // todo: 风险操作再确认, 是否要强制覆盖已有文件？
            // 使用inquirer实现和用户在终端的交互
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
            console.log(`\r\nSuccessfully created project ${chalk.magenta(name)}`)
            console.log(`\r\n  cd ${chalk.magenta(name)}`)
            console.log('\r\n  npm install')
            console.log('  npm run dev\r\n')
            console.log(`${chalk.magenta('now, code happily~~~')}`)
        })
        .catch((e) => {
            console.log(`${chalk.red('download template failed')}: `, e)
        })
}