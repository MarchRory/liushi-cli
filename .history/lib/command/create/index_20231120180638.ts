import path from "path";
import fsExtra from 'fs-extra'
import { createArgsModel } from "./types";

export async function create(args: createArgsModel) {
    const { name, options } = args
    console.log('name: ', name)
}