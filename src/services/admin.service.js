import axios from "axios";
import authHeader from "./auth-header";

const API_URL = process.env.REACT_APP_BK_URI;
const userid = JSON.parse(localStorage.getItem("user"))?.id;

const instance = axios.create({
    baseURL: API_URL,
    timeout: 1000,
    headers: authHeader(),
});

const newHome = (homeName) => {
    return instance.post(API_URL + "newhome", { userid, homeName });
};
const newRoom = (homeName, roomName) => {
    return instance.post(API_URL + "newroom", { userid, homeName, roomName });
};
const newDevice = (homeName, roomName, deviceId, deviceName) => {
    return instance.post(API_URL + "newdevice", {
        userid,
        homeName,
        roomName,
        deviceId,
        deviceName,
    });
};

const flip = (device_id, deviceid, status) => {
    return instance.post(API_URL + "turnon", {
        userid,
        device_id,
        deviceid,
        status,
    });
};
// eslint-disable-next-line
export default {
    newHome,
    newRoom,
    newDevice,
    flip,
};
