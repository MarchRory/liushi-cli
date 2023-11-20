const path = require("path");
const fsExtra = require('fs-extra')
interface createArgsModel {
    name: string
    options: {
        force?: boolean
    }
}


module.exports = async function (args: createArgsModel) {
    const { name, options } = args
    console.log('name: ', name)
}