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

const turnon = () => {
	return instance.post(API_URL + "turnon", { userid });
};

export default {
	newHome,
	newRoom,
	newDevice,
	turnon,
};
