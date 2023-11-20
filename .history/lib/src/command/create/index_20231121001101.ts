import path from "path";
import fsExtra from 'fs-extra'
import { createArgsModel } from "./types/index";


export async function create(args: createArgsModel) {
    const { name, options } = args
    // 获取当前所在目录
    const cwd = process.cwd()

    // 拼接待创建项目的地址
    const target = path.join(cwd, name)

    // 是否强制覆盖
    if (fsExtra.existsSync(target)) {
        if (options && options.force) {

        } else {

        }
    }

    console.log('name: ', name)
}