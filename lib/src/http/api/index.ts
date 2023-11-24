import request from "../axios"
export const organizationName = 'liushi-cli'
enum Type {
    orgs = 'orgs',
    repos = 'repos'
}
enum API {
    repos = 'repos',
    version = 'tags'
}

/**
 * get github repos template list
 * @returns 
 */
export const getReposList = () => {
    let url = `/${Type.orgs}/${organizationName}/${API.repos}`
    return request.get({ url })
}

/**
 * git template`s version, which you choose
 * @param repoName 
 * @returns 
 */
export const getVersionList = (repoName: string) => {
    let url = `/${Type.repos}/${organizationName}/${repoName}/${API.version}`
    return request.get({ url })
}