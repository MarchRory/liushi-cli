const fs = require('fs');
const path = require('path');
const folderPath = path.resolve(__dirname + '/command');
const excludeFolderPath = ['types'];

const commandPath = new Set<string>()
const allFiles = path.resolve(__dirname)
let indexFile = fs.readdirSync(allFiles).find((item) => item.includes('index'))
fs.readdirSync(folderPath).forEach((fileOrFolder: string) => {
    if (excludeFolderPath.includes(fileOrFolder)) {
        return;
    }
    if (fs.lstatSync(path.join(folderPath, fileOrFolder)).isDirectory()) {
        const indexFilePath: string = path.join(folderPath, fileOrFolder, indexFile);
        if (fs.existsSync(indexFilePath)) {
            commandPath.add(indexFilePath)
        }
    }
});

export default commandPath;