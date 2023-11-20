const path = require("path");
const fsExtra = require('fs-extra')

import { createArgsModel } from "./types/index.ts";
async function create(args: createArgsModel) {
    const { name, options } = args
    console.log('name: ', name)
}

module.exports = { create() }