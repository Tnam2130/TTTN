import { useFetch } from "../../util/CustomHook";
const hostURL = "/api/user/";

export async function findAll() {
    // http:localhost:8080/api/user/
    return (await useFetch.get(hostURL)).data;
}
export async function login() {
    // http:localhost:8080/api/user/login
    return ((await useFetch.get(hostURL + "login")).data)
}