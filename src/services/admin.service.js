import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:6969/api/";
const userid = JSON.parse(localStorage.getItem("user"))?.id;

const instance = axios.create({
    baseURL: API_URL,
    timeout: 1000,
    headers: authHeader(),
});

const newHome = (homeName) => {
    return instance.post(API_URL + "newhome", { userid, homeName });
};
const newRoom = (homeId, roomName) => {
    return instance.post(API_URL + "newroom", { userid, homeId, roomName });
};
const newDevice = (homeId, roomId, deviceId, deviceName) => {
    return instance.post(API_URL + "newdevice", {
        userid,
        homeId,
        roomId,
        deviceId,
        deviceName,
    });
};

export default {
    newHome,
    newRoom,
    newDevice,
};
