import api from "./api";
import { API_URL } from "../constants";
import { AxiosResponse } from "axios";
import  * as SecureStore from 'expo-secure-store';

const setRefreshToken = async (refresh_token: string) => {
    await SecureStore.setItemAsync('refresh_token', refresh_token);
};

const setAccessToken = async (access_token: string) => {
    await SecureStore.setItemAsync('access_token', access_token);
};

export const login = async (email: string, pass: string) => {
    return api.request({
        method: 'POST',
        url: '/auth/login',
        data: {
            email,
            password: pass
        }
    }).then((res) => {
        console.log('success');
        console.log(res);
        if (res.status !== 200) {
            console.log(res.status);
            return res.data;
        }
        const { access_token, refresh_token } = res.data;
        if (access_token) {
            console.log(access_token);
            setAccessToken(access_token);
        }
        if (refresh_token) {
            console.log(refresh_token);
            setRefreshToken(refresh_token);
        }
        console.log(res.data);
        return res.data;
    }).catch(err => {
        console.log(api);
        console.error(err.toJSON());
    });
};

export const logout = async () => {
    await SecureStore.deleteItemAsync('access_token');
    await SecureStore.deleteItemAsync('refresh_token');
};

export const register = async (email, pass, confirmPass, symptoms?) => {
    try {
        const res = await api.request({
            method: 'POST',
            url: `/auth/register`,
            data: {
                email,
                password: pass,
                passwordConfirm: confirmPass,
                symptoms
            }
        });
        if (res.status !== 201) {
            console.log(res.status);
            return res.data;
        }
        await login(email, pass);
        return res.data;
    } catch (err) {
        console.error(err);
    }
};