interface optionType {
    flags: string,
    description?: string,
    defaultValue?: string | boolean | string[]
}

export interface commandConfig {
    command: string
    description: string
    option: optionType[]
    action: (...args: any[]) => Promise<void> | void
}