const https = require("https");
export interface MyAxiosConfig {
    baseURL: string,
    timeout: number,
    httpsAgent: typeof https.Agent
}

export interface RequestConfig<T = any> {

}