import api from "./api";

interface AggregatesApi {
    getTop4Trending: () => Promise<{symptom: string, count: number}[] | never>;
    getInfectedCount: () => Promise<number | never>;
    getTotalUserCount: () => Promise<number | never>;
    getNewInfectionsCount: () => Promise<number | never>;
    get4WeeksInfectionCount: () => Promise<number[] | never>;
}

export default function aggregatesApi(): AggregatesApi {
    const getTop4Trending = async (): Promise<{symptom: string, count: number}[] | never> => {
        try{
            const res = await api.request({
                method: "GET",
                url: "/aggregates/four_trending_symptoms",
            });
            if (res) {
                return res.data;
            }
        } catch (err) {
            return Promise.reject(err);
        }
    };

    const getInfectedCount = async () : Promise<number | never> => {
        return api.request({
            method: "GET",
            url: "/aggregates/infected"
        }).then((res) => {
            return res.data as number;
        }).catch(err => {
            return Promise.reject(err);
        });
    };
    
    const getTotalUserCount = async () : Promise<number | never> => {
        return api.request({
            method: "GET",
            url: "/aggregates/num_users"
        }).then((res) => {
            return res.data as number;
        }).catch(err => {
            return Promise.reject(err);
        });
    };

    const getNewInfectionsCount = async () : Promise<number | never> => {
        return api.request({
            method: "GET",
            url: "/aggregates/new_infections"
        }).then((res) => {
            return res.data as number;
        }).catch(err => {
            return Promise.reject(err);
        });
    };

    const get4WeeksInfectionCount = async () : Promise<number[] | never> => {
        return await api.request({
            method: "GET",
            url: "/aggregates/infected_last_4_weeks"
        }).then((res) => {
            return res.data as number[];
        }).catch(err => {
            return Promise.reject(err);
        });
    };

    return {
        getTop4Trending,
        getInfectedCount,
        getTotalUserCount,
        getNewInfectionsCount,
        get4WeeksInfectionCount
    };
}