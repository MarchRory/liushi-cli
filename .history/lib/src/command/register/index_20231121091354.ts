const fs = require('fs');
const path = require('path');
// 指定要读取的文件夹路径
const folderPath = '../../command';
// 指定要排除的文件夹路径
const excludeFolderPath = ['../register', '../types'];

const commandPath = []
// 遍历指定文件夹下的所有文件和文件夹
fs.readdirSync(folderPath, (err, data) => {
    console.log('folder: ', data)
    data.forEach(fileOrFolder => {
        // 排除要排除的文件夹
        if (excludeFolderPath.includes(fileOrFolder)) {
            return;
        }
        // 如果是文件夹，则递归遍历该文件夹下的文件和文件夹
        if (fs.lstatSync(path.join(folderPath, fileOrFolder)).isDirectory()) {
            const indexFilePath = path.join(folderPath, fileOrFolder, 'index.ts');
            // 如果该文件夹下存在index.ts文件，则输出文件路径
            if (fs.existsSync(indexFilePath)) {
                commandPath.push(indexFilePath)
                console.log(indexFilePath);
            }
        }
    });
})

export default commandPath;
