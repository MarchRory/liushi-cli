interface option {
    flags: string,
    description?: string,
    defaultValue?: string | boolean | string[]
}

export interface commandConfig {
    command: string
    description: string

}