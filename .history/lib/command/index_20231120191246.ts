import path from "path";
import fsExtra from 'fs-extra'
import { createArgsModel } from "./create/types/index.ts";

export async function create(args: createArgsModel) {
    const { name, options } = args
    console.log('name: ', name)
}