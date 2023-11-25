import { getReposList, getVersionList } from "../http/api"
import { organizationName } from '../http/api/index'
import { agent } from "../http/axios"
import { GotOptions } from 'got'
const inquirer = require('inquirer')
const ora = require("ora")
const chalk = require("chalk")
const path = require("path")
const util = require("util")
const downloadGitRepo = util.promisify(require("download-git-repo"))

/**  
 * the agent is nessceary or you will get a error message, like GotError [RequestError]: unable to verify the first certificate
 * to know more options of download-git-repo options, please open this link:
 * @see https://github.com/sindresorhus/got/blob/main/documentation/2-options.md
 */
const downloadOpts: GotOptions<null> = {
    agent
}

const loading = async (fn, message, ...args) => {
    const spinner = ora(message)
    spinner.start()
    try {
        const result = await fn(...args)
        spinner.succeed()
        return result
    } catch (e) {
        spinner.fail('Request failed: \n', e)
    }
}

/**
 * choose template
 * @param name project name
 * @param targetDir
 * @returns 
 */
export const chooseTemplate = async (name: string, targetDir: string) => {
    const repoList = await loading(getReposList, 'Pulling template list...\n')
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
        try {
            await loading(
                downloadGitRepo,
                `downloading the ${chalk.cyan(repoName)}\n`,
                templateUrl,
                path.resolve(process.cwd(), targetDir),
                { ...downloadOpts }
            )
            resolve(true)
        } catch (err) {
            reject(err)
        }

    })
}