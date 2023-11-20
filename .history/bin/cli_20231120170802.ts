#! /usr/bin/env ts-node
// shebang, It is required in the NODE CLI program and must be located at the top of the entry file

const inquirer = require('inquirer')
const { program } = require('../lib/command/index')
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