import axios from "axios";
import type { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { MyAxiosConfig, RequestConfig } from "./types";
const https = require("https")
const chalk = require("chalk")
// Maybe I will use got instead of axios one day

class Request {
    http: AxiosInstance;
    constructor(config: MyAxiosConfig) {
        this.http = axios.create(config)

        this.http.interceptors.request.use(
            (config: InternalAxiosRequestConfig) => {
                return config
            },
            (err: AxiosError) => {
                console.log(`${chalk.red('request error!')}`)
                return Promise.reject(err)
            }
        )

        this.http.interceptors.response.use(
            (response: AxiosResponse) => {
                const { data } = response
                return data
            },
            (err: AxiosError) => {
                const { cause } = err
                return Promise.reject(cause)
            }
        )
    }

    request<T = any>(config: RequestConfig<T>) {
        return new Promise((resolve, reject) => {
            try {
                this.http.request(config).then((res) => {
                    resolve(res)
                }).catch(((err) => {
                    console.log(('not success: ', err))
                    reject(err)
                }))
            } catch (err: any) {
                console.log('axios err: ', err)
                reject(err)
            }
        })
    }

    get<T = any>(config: RequestConfig<T>) {
        return this.http.request({ ...config, method: "GET" })
    }
}

export const agent = new https.Agent({
    rejectUnauthorized: false
})
const request = new Request({ baseURL: "https://api.github.com", timeout: 30 * 1000, httpsAgent: agent })

export default request