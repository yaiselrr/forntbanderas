import axios from 'axios'
import {siteStore} from "~cf/store/site.store"

const axios_api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})
axios_api.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
axios_api.defaults.headers.get['Accepts'] = 'application/json'
axios_api.interceptors.request.use(
    config => {
        const site = siteStore()
        if (site.user) {
            if (config.url.endsWith("logout")) {
                config.headers["Refresh-Token"] = site.refresh_token
            }
            config.headers.Authorization = "Bearer " + (!config.url.endsWith("refresh") ? site.jwt : site.refresh_token)
        }
        return config
    }
)

axios_api.interceptors.response.use(
    res => {
        return res
    },
    async error => {
        const site = siteStore()
        const originalRequest = error.config
        console.error(error)
        if (error.response)
            if (error.response.request.status === 403 && error.config.headers.Authorization.length > 7) {
                if (!error.response.request.responseURL.endsWith("refresh")) {
                    const token: any = await site.refresh()
                    originalRequest.headers.Authorization = "Bearer " + token.data.token
                    return axios(originalRequest)
                } else {
                    site.logout()
                }
            }
        error = error.response ? error : {

            response: {
                data: {
                    message: "Cors error,Check preflight request, there is not response from server"
                },
                statusText: "Cors Errors , There no status text"
            }
        }
        throw error
    }
)

axios_api.interceptors.request.use(
    config => {
        if (config.method == 'patch' || config.method == 'put') {
            if (config.data?.isFormData) {
                config.method = 'post'
            }
        }
        return config
    }
)
// axios_api.interceptors.request.eject(reqInt)
// axios_api.interceptors.response.eject(respInt)
export default axios_api
