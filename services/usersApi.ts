import api from "./api";
import User from "../types/user_resp";

interface UsersApi {
    getMe: () => Promise<User | never>;
}

export default function usersApi(): UsersApi {
    const getMe = async (): Promise<User | never> => {
        const resp = await api.request({
            method: "GET",
            url: "/users/me",
        }).catch(err => {
            return Promise.reject(err);
        });

        if (resp.status === 200) {
            const user = resp.data as User;
            return user;
        }
    }

    return {
        getMe
    }
}