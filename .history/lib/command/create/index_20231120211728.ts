const path = require("path");
const fsExtra = require('fs-extra')

const create = async (args: createArgsModel) => {
    const { name, options } = args
    console.log('name: ', name)
}

module.exports = { create }