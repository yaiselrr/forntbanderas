import { AxiosRequestConfig, AxiosStatic } from 'axios';
import { AxiosOptionsParameter } from '~h/axios/AxiosOptionsParameter';
export declare function useAxiosFetch(axios: AxiosStatic, axiosRequest: AxiosRequestConfig, options?: AxiosOptionsParameter): {
    loading: import("vue").Ref<boolean>;
    error: import("vue").Ref<null>;
    result: any;
    onError: (callback: Fn) => void;
    onResult: (cb: Fn) => void;
    refetch: () => false | void;
    enabled: import("vue").Ref<boolean>;
    toggleEnabled: (value?: boolean | undefined) => boolean;
};
