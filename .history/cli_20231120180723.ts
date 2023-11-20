#! /usr/bin/env ts-node
// shebang, It is required in the NODE CLI program and must be located at the top of the entry file

// const inquirer = require('inquirer')

/**
 * type: input、number、confirm、list、checkbox......
 * name: key
 * message: show message
 * default: default value
 */
/* inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: "please name your project: ",
        default: "project"
    }, {
        type: 'checkbox',
        message: "please Select a JavaScript Framework: ",
        requied: true,
        choices: [
            { name: 'vue3', value: 'vue3' },
            { name: 'vue2', value: 'vue2' }
        ]
    }
]) */

import { Command } from "commander"
import packageJSON from './package.json'
import { create } from './lib/command/create/index'
const program = new Command()

program
    // 定义命令
    .command("create <project-name>")
    // 命令的描述信息
    .description('create a new project and name it')
    // 选项命令
    .option('-f, --force', 'overwrite target directory if it exist')
    .option('')
    .action(async (name, options) => {
        await create({ name, options })
    })

program
    .version(`v${require('./package.json').version}`)
    .usage('<command> [option]')

program.parse(process.argv)