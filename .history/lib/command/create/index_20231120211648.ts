const path = require("path");
const fsExtra = require('fs-extra')

async function create(args: createArgsModel) {
    const { name, options } = args
    console.log('name: ', name)
}

module.exports = { create }