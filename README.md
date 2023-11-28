# liushi-cli
> Create more, Work less

[![npm version](https://badge.fury.io/js/liushi-cli.svg)](https://www.npmjs.com/package/liushi-cli)
[![Downloads](https://img.shields.io/npm/dm/liushi-cli.svg)](https://www.npmjs.com/package/liushi-cli)

 As the number of projects grows, starting a new project each time requires too much foundational configuration, which seems cumbersome and unnecessary. 
 
 Therefore, this CLI was developed. It comes with some commonly used project templates, each of which is pre-configured with the necessary libraries, making it ready to use. 
 
 You only need to choose the one that suits your needs, then
```shell
npm install
```
Finally, you can immediately embark on an exciting development journey.

# install 
```shell
npm install liushi-cli
```

# Usage
## for help
```shell
liushi-cli --help
```
## create project
```shell
# in current version, only one option this command provides, it`s -f, which means force override current folder
liushi-cli create <project-name> [options]
```

# tempalte list
- [v3-ts-tailwind-template](https://github.com/liushi-cli/v3-ts-tailwind-template): Vue3 + TypeScript + Pinia + TailwindCSS + Eslint + Prettier + axios

# where the templates are?
For the convenience of management, I store them all in this organization, [see here](https://github.com/orgs/liushi-cli/repositories)

# current feature
- show help
- template list, version list
- create project depends on a specific version of template you choose

# next version
- Refact if necessary
- More comprehensive options

# Future plans
- Free to choose basic libraries
- Performance optimization
- More templates, including mobile, web, PC, etc.
