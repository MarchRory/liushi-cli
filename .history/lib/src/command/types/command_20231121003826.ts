interface optionType {
    flags: string,
    description?: string,
    defaultValue?: string | boolean | string[]
}

// 自定义指令的配置项类型
export interface commandConfig {
    command: string
    description: string
    option: optionType[]
    action: Function
}