import api from "./api";

interface AggregatesApi {
    getSymptoms: () => Promise<string[] | never>;
    getInfectedCount: () => Promise<number | never>;
    getTotalUserCount: () => Promise<number | never>;
    getNewInfectionsCount: () => Promise<number | never>;
    get4WeeksInfectionCount: () => Promise<number[] | never>;
}

export default function aggregatesApi(): AggregatesApi {
    const getSymptoms = async (): Promise<string[] | never> => {
        return await api.request({
            method: "GET",
            url: "/aggregates/trending_symptoms",
        }).then((res) => {
            return res.data as string[];
        }).catch(err => {
            return Promise.reject(err);
        });
    };

    const getInfectedCount = async () : Promise<number | never> => {
        return await api.request({
            method: "GET",
            url: "/aggregates/infected"
        }).then((res) => {
            return res.data as number;
        }).catch(err => {
            return Promise.reject(err);
        });
    };
    
    const getTotalUserCount = async () : Promise<number | never> => {
        return await api.request({
            method: "GET",
            url: "/aggregates/num_users"
        }).then((res) => {
            return res.data as number;
        }).catch(err => {
            return Promise.reject(err);
        });
    };

    const getNewInfectionsCount = async () : Promise<number | never> => {
        return await api.request({
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
        getSymptoms,
        getInfectedCount,
        getTotalUserCount,
        getNewInfectionsCount,
        get4WeeksInfectionCount
    };
}