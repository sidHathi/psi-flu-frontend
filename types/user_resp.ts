import Symptoms from "./symptoms_resp";

export default interface User {
    email: string;
    symptoms?: Symptoms;
}