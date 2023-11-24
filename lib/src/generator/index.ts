import { getReposList, getVersionList } from "../http/api"
import { organizationName } from '../http/api/index'
const inquirer = require('inquirer')
const ora = require("ora")
const chalk = require("chalk")
const path = require("path")
var downloadGitRepo = require("download-git-repo")
const util = require("util")
downloadGitRepo = util.promisify(downloadGitRepo)

const loading = async (fn, message, ...args) => {
    const spinner = ora(message)
    spinner.start()

    try {
        const result = await fn(...args)
        spinner.succeed()
        return result
    } catch (e) {
        spinner.fail('Request failed')
    }
}

/**
 * choose template
 * @param name 
 * @param targetDir 
 * @returns 
 */
export const chooseTemplate = async (name: string, targetDir: string) => {
    const repoList = await loading(getReposList, 'Pulling template list...')
    if (!repoList) return;
    const repos: string[] = repoList.map((item) => item.name)
    const { repoName } = await inquirer.prompt({
        name: "repoName",
        type: "list",
        choices: repos,
        message: "please choose the template you want to use"
    })
    console.log(`you choose the template:  ${chalk.cyan(`${repoName}`)}`)
    return repoName
}

/**
 * choose version of the template
 * @param repoName 
 * @returns 
 */
export const chooseVersion = async (repoName: string) => {
    const versions = await loading(getVersionList, `pulling the version of ${chalk.cyan(repoName)}`, repoName)
    if (!versions) return;
    const versionList: string[] = versions.map((item) => item.name)
    const { version } = await inquirer.prompt({
        name: "version",
        type: "list",
        choices: versionList,
        message: `please choose the version of ${chalk.green(repoName)}`
    })
    return version
}

/**
 * download the template you choose
 * @param repoName 
 * @param version 
 * @param targetDir 
 */
export const downloadTemplate = (repoName: string, version: string, targetDir: string) => {
    return new Promise(async (resolve, reject) => {
        const templateUrl = `${organizationName}/${repoName}${version ? '#' + version : ""}`
        const res = await loading(
            downloadGitRepo,
            `downloading the ${chalk.cyan(repoName)}\n`,
            templateUrl,
            path.resolve(process.cwd(), targetDir),
            { close: false },
            (e) => {
                console.log(e)
            }
        )
        if (res) {
            resolve(true)
        }
        else reject(res)
    })

}