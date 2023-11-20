const path = require("path");
const fsExtra = require('fs-extra')

interface createArgs {
    name: string
    options: {
        force?: boolean
    }
}

module.exports = async function (args: createArgs) {
    const { name, options } = args

}