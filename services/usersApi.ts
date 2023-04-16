import api from "./api";
import User from "../types/user_resp";
import Symptoms from "../types/symptoms_resp";

interface UsersApi {
    getMe: () => Promise<User | never>;
    updateMe: (newSymptoms: Symptoms) => Promise<User | never>;
}

export default function usersApi(): UsersApi {
    const getMe = async (): Promise<User | never> => {
        const resp = await api.request({
            method: "GET",
            url: "/users/me",
        }).catch(err => {
            return Promise.reject(err);
        });

        if (resp.status === 200 && 'user' in resp.data) {
            const user = resp.data.user as User;
            return user;
        }
    };
    
    const updateMe = async (newSymptoms: Symptoms): Promise<User | never> => {
        const resp = await api.request({
            method: "PUT",
            url: "/users/me",
            data: newSymptoms,
        }).catch(err => {
            return Promise.reject(err);
        });

        if (resp.status === 200 && 'user' in resp.data) {
            const user = resp.data.user as User;
            return user;
        }
    };

    return {
        getMe,
        updateMe
    }
}