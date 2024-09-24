import axios_api from '@/config/axios/axios'
import {useAxiosFetch} from '~c/axios/useAxiosFetch'
import {AxiosOptionsParameter} from '~c/axios/AxiosOptionsParameter'
import {AxiosRequestConfig, AxiosStatic, Method} from 'axios'
import {ContentTypeEnum} from '~co/enums/httpEnum'
import {objectToFormData} from '~h/utils/utils'

export default async function RBaseModel(modelName: string, urlModel: string, axiosInstance?: any) {
    const axios: AxiosStatic = axiosInstance ?? axios_api
    let headers = {'Content-type': ContentTypeEnum.JSON}

    class BaseModel {
        public isFormData
        public changedAttributes
        public modelName
        public url
        static columns

        constructor() {
            this.isFormData = false
            this.changedAttributes = {}
            this.modelName = modelName
            this.url = urlModel
        }

        getId() {
            return null
        }

        public cleanNull(value) {
            const keys = Object.keys(value)
            const deleteKeys = []
            Object.values(value).forEach((e, index) => {
                e == null ? deleteKeys.push(keys[index]) : false
            })
            deleteKeys.forEach(e => {
                delete value[e]
            })
        }

        public params(self = false): any | FormData {
            let value = Object.assign({}, self ? this : this.getId() ? this.changedAttributes : this)
            value = this.clean(value)
            return this.isFormData ? this.formData() : value
        }

        public formData(): FormData {
            let value = Object.assign({}, {...this})
            value = this.clean(value)
            delete value.isFormData
            const formdata = objectToFormData(value)
            if ((this as any).get_id()) {
                formdata.append("_method", "PATCH")
            }
            return formdata
        }

        clean(value: any, cleanNull = true) {
            if (cleanNull)
                this.cleanNull(value)
            delete value.changedAttributes
            delete value.url
            delete value.modelName
            delete value.isFormData
            return value
        }

        static transformRequest(req, headers) {
            headers['Content-type'] = req.isFormData ? ContentTypeEnum.FORM_DATA : ContentTypeEnum.JSON
            return req.params ? req.isFormData ? req.params() : JSON.stringify(req.params()) : req
        }

        static useGetMany(
            params?: any,
            options?: AxiosOptionsParameter,
            axiosRequestConfig?: AxiosRequestConfig
        ) {
            return useAxiosFetch(
                axios,
                {url: urlModel, method: 'get', params, headers, ...axiosRequestConfig} as AxiosRequestConfig,
                options
            )
        }

        static useGet(
            id: any,
            params?: any,
            options?: AxiosOptionsParameter,
            axiosRequestConfig?: AxiosRequestConfig
        ) {
            const url = urlModel + '/' + id
            return useAxiosFetch(
                axios,
                {url, method: 'get', params, headers, ...axiosRequestConfig} as AxiosRequestConfig,
                options
            )
        }

        static useUpdate(
            id: any,
            params?: any,
            options?: AxiosOptionsParameter,
            axiosRequestConfig?: AxiosRequestConfig
        ) {
            const url = urlModel + '/' + id
            return useAxiosFetch(
                axios,
                {url, method: 'patch', data: params, headers, ...axiosRequestConfig} as AxiosRequestConfig,
                options
            )
        }

        static useDeleteMany(
            params?: any,
            options?: AxiosOptionsParameter,
            axiosRequestConfig?: AxiosRequestConfig
        ) {
            return useAxiosFetch(
                axios,
                {url: urlModel, method: 'delete', data: params, headers, ...axiosRequestConfig} as AxiosRequestConfig,
                options
            )
        }

        static useDeleteById(
            params?: any,
            options?: AxiosOptionsParameter,
            axiosRequestConfig?: AxiosRequestConfig
        ) {
            const url = urlModel + '/delete_by_id'
            return useAxiosFetch(
                axios,
                {url, method: 'delete', data: params, headers, ...axiosRequestConfig} as AxiosRequestConfig,
                options
            )
        }

        static useCustomFetch(
            method: Method,
            params?: any,
            data?: any,
            options?: AxiosOptionsParameter,
            axiosRequestConfig?: AxiosRequestConfig
        ) {
            return useAxiosFetch(axios, {
                url: urlModel,
                method,
                params,
                data,
                headers, ...axiosRequestConfig
            } as AxiosRequestConfig, options)
        }

        public useCreate(options?: AxiosOptionsParameter, axiosRequestConfig?: AxiosRequestConfig) {
            return useAxiosFetch(
                axios,
                {
                    url: urlModel,
                    method: 'post',
                    data: this.params(),
                    headers, ...axiosRequestConfig
                } as AxiosRequestConfig,
                options
            )
        }

        public useUpdate(options?: AxiosOptionsParameter, axiosRequestConfig?: AxiosRequestConfig) {
            const url = urlModel + '/' + this.getId()
            return useAxiosFetch(
                axios,
                {url, method: 'patch', data: this.params(), headers, ...axiosRequestConfig} as AxiosRequestConfig,
                options
            )
        }

        public useSave(options?: AxiosOptionsParameter, axiosRequestConfig?: AxiosRequestConfig) {
            headers = this.isFormData ? {'Content-type': ContentTypeEnum.FORM_DATA} : headers
            return this.getId()
                ? this.useUpdate(options, axiosRequestConfig)
                : this.useCreate(options, axiosRequestConfig)
        }

        static useDelete(
            id: any,
            options?: AxiosOptionsParameter,
            axiosRequestConfig?: AxiosRequestConfig
        ) {
            const url = urlModel + '/' + id
            return useAxiosFetch(
                axios,
                {url, method: 'delete', params: {}, headers, ...axiosRequestConfig} as AxiosRequestConfig,
                options
            )
        }

        static useValidate(
            params?: any,
            options?: AxiosOptionsParameter,
            axiosRequestConfig?: AxiosRequestConfig
        ) {
            const url = urlModel + '/validate'
            return useAxiosFetch(
                axios, {url, method: 'post', data: params, headers, ...axiosRequestConfig} as AxiosRequestConfig,
                options
            )
        }

        static useStaticCreate(model: any, options?: AxiosOptionsParameter, axiosRequestConfig?: AxiosRequestConfig) {
            return useAxiosFetch(
                axios,
                {
                    url: urlModel,
                    method: 'post',
                    data: model,
                    transformRequest: this.transformRequest,
                    headers, ...axiosRequestConfig
                } as AxiosRequestConfig,
                {...options,}
            )
        }

        static useStaticUpdate(model: any, options?: AxiosOptionsParameter, axiosRequestConfig?: AxiosRequestConfig) {
            const url = urlModel + '/' + model?.id
            return useAxiosFetch(
                axios,
                {
                    url,
                    method: 'patch',
                    data: model,
                    transformRequest: this.transformRequest,
                    headers, ...axiosRequestConfig
                } as AxiosRequestConfig,
                options
            )
        }

        static useStaticSave(model: any | Function, options?: AxiosOptionsParameter, axiosRequestConfig?: AxiosRequestConfig) {
            headers = model?.isFormData ? {'Content-type': ContentTypeEnum.FORM_DATA} : headers
            return model?.id
                ? this.useStaticUpdate(model, options, axiosRequestConfig)
                : this.useStaticCreate(model, options, axiosRequestConfig)
        }

        static validate(
            params?: any,
            axiosRequestConfig?: AxiosRequestConfig
        ) {
            const url = urlModel + '/validate'
            return axios.post(url, params, axiosRequestConfig as any)
        }

        static show_columns(columns_name, show = true) {
            if (columns_name.includes('*'))
                return this.columns
            const columns = !columns_name ? this.columns : columns_name.map((element) => {
                return this.columns.find((c) => c.key === element)
            })
            return !columns_name ? this.columns : show ? columns : this.columns.filter((element) => {
                return columns_name.indexOf(element.key) === -1
            })
        }
    }

    return BaseModel
}
