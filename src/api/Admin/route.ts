import { useFetch } from "../../util/CustomHook";
const hostURL = "/api/admin/";

export async function findAll() {
    // http:localhost:8080/api/admin/
    return (await useFetch.get(hostURL)).data;
}
export async function login() {
    // http:localhost:8080/api/admin/login
    return ((await useFetch.get(hostURL + "login")).data)
}