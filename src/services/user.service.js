import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:6969/api/";

const user = JSON.parse(localStorage.getItem("user"));
const data = {
    userid: user?.id,
};
const instance = axios.create({
    baseURL: API_URL,
    timeout: 1000,
    headers: authHeader(),
});

const getPublicContent = () => {
    return instance.get(API_URL + "all");
};

const getUserBoard = () => {
    return instance.post(API_URL + "user", data);
};

const getAdminBoard = () => {
    return instance.post(API_URL + "admin", data);
};

export default {
    getPublicContent,
    getUserBoard,
    getAdminBoard,
};
