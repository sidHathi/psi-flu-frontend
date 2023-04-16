import axios, {
    AxiosError,
    AxiosInstance,
    AxiosResponse,
    InternalAxiosRequestConfig,
} from "axios";
import { API_URL } from "../constants";
import * as SecureStorage from 'expo-secure-store';


const onRequest = (config: InternalAxiosRequestConfig) => {
    SecureStorage.getItemAsync("access_token").then(val => {
        config.headers["Authorization"] = `Bearer ${val}`;
        return config;
    }).catch(err => err);

    return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
    return response;
};

const onResponseError = async (error: AxiosError): Promise<AxiosError> => {
    if (error.response) {
        console.error(error.response.status);
        // Access Token was expired
        if ( error.response.status === 401 &&
        (error.response.data as any).message === "jwt expired"
        ) {
        const stored_rt = JSON.parse(await SecureStorage.getItemAsync("refresh_token"));

        try {
            error.config.headers["Authorization"] = `Bearer ${stored_rt}`;
            const rs = await axios.get(`${API_URL}/auth/refresh`);

            const { access_token } = rs.data;

            await SecureStorage.setItemAsync("access_token", JSON.stringify(access_token));
            return;
        } catch (_error) {
            return Promise.reject(_error);
        }
        }
    }
    await SecureStorage.deleteItemAsync('access_token');
    await SecureStorage.deleteItemAsync('refresh_token');
    return Promise.reject(error);
};

export const setupInterceptorsTo = (
    axiosInstance: AxiosInstance
): AxiosInstance => {
    axiosInstance.interceptors.request.use(onRequest, onRequestError);
    axiosInstance.interceptors.response.use(onResponse, onResponseError);
    return axiosInstance;
};
