import path from "path";
import fsExtra from 'fs-extra'
import { createArgsModel } from "./types";



module.exports = async function (args: createArgsModel) {
    const { name, options } = args
    console.log('name: ', name)
}