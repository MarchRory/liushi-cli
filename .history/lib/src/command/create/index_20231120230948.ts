import path from "path";
import fsExtra from 'fs-extra'
import { createArgsModel } from "./types/index";


export async function create(args: createArgsModel) {
    console.log('args: ', args)
    const { name, options } = args
    console.log('name: ', name)
}