import {defineStore} from "pinia"
import SimpleCrypto from "simple-crypto-js"
import axios_api from "@/config/axios/axios"
import {extract_user_data} from "~h/utils/utils"
const simpleCrypto = new SimpleCrypto(import.meta.env.VITE_TOKEN_KEY)
export const siteStore = defineStore("site", {
    state: () => ({
        loading:true,
        tip:'Cargando ..'
    }),
    getters: {
        jwt() {
            return simpleCrypto.decrypt(localStorage.getItem(import.meta.env.VITE_APP_HASH))
            },
        refresh_token() {
            return simpleCrypto.decrypt(localStorage.getItem("refresh_" + import.meta.env.VITE_APP_HASH))
        },
        user() {
            return localStorage.getItem(import.meta.env.VITE_APP_HASH) ? Object.freeze(extract_user_data("user", simpleCrypto.decrypt(localStorage.getItem(import.meta.env.VITE_APP_HASH)))) : null
        }
    },
    actions: {
        login(params = {}) {
            return axios_api.post("login", params).then((response) => {
                const token_hash = simpleCrypto.encrypt(response.data.token)
                const refresh_token_hash = simpleCrypto.encrypt(response.data.refresh_token)
                localStorage.setItem(import.meta.env.VITE_APP_HASH, token_hash)
                localStorage.setItem("refresh_" + import.meta.env.VITE_APP_HASH, refresh_token_hash)
                return response
            }).catch(error => {
                throw error
            })
        },
        refresh() {
            return axios_api.post("refresh", {}).then(async (response) => {
                const token_hash = await simpleCrypto.encrypt(response.data.token)
                const refresh_token_hash = await simpleCrypto.encrypt(response.data.refresh_token)
                localStorage.setItem(import.meta.env.VITE_APP_HASH, token_hash)
                localStorage.setItem("refresh_" + import.meta.env.VITE_APP_HASH, refresh_token_hash)
                return response
            }).catch(() => {

            })
        },
        logout(params = {}) {
            return axios_api.post("logout", params).then((response) => {
                return {success: true, response: response}
            }).catch(() => true).finally(() => {
                localStorage.removeItem(import.meta.env.VITE_APP_HASH)
                localStorage.removeItem("refresh_" + import.meta.env.VITE_APP_HASH)
                location.reload()
            })
        }
    }
})

