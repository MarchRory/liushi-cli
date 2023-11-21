const fs = require('fs');
const path = require('path');
// 指定要读取的文件夹路径
const folderPath = path.resolve(__dirname + '/command');
const excludeFolderPath = ['types'];

const commandPath = []
fs.readdirSync(folderPath).forEach(fileOrFolder => {
    // 排除types文件夹
    if (excludeFolderPath.includes(fileOrFolder)) {
        return;
    }
    // 如果是文件夹，则递归遍历该文件夹下的文件和文件夹
    if (fs.lstatSync(path.join(folderPath, fileOrFolder)).isDirectory()) {
        const indexFilePath = path.join(folderPath, fileOrFolder, 'index.ts');
        // 如果该文件夹下存在index.ts文件，则输出文件路径
        if (fs.existsSync(indexFilePath)) {
            commandPath.push(indexFilePath)
        }
    }
});


export default commandPath;
