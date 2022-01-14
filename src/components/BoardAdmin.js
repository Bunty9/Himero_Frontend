import React, { useState, useEffect } from "react";
import UserService from "../services/user.service";
import CustomizedDialogs from "./dialog";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import adminService from "../services/admin.service";

const BoardAdmin = () => {
    const [content, setContent] = useState("");

    const newHome = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console

        const homeName = data.get("home_name");
        console.log({
            name: homeName,
        });
        adminService.newHome(homeName).then(
            (response) => {
                alert(response.data);
            },
            (error) => {
                alert(error.message);
            }
        );
    };
    const newRoom = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        const homeName = data.get("home_name");
        const roomName = data.get("room_name");

        adminService.newRoom(homeName, roomName).then(
            (response) => {
                alert(response.data);
            },
            (error) => {
                const errorMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                alert(errorMessage);
            }
        );
    };
    const newDevice = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        const homeName = data.get("home_name");
        const roomName = data.get("room_name");
        const deviceId = data.get("device_id");
        const deviceName = data.get("device_name");

        adminService.newDevice(homeName, roomName, deviceId, deviceName).then(
            (response) => {
                alert(response.data);
            },
            (error) => {
                alert(error.message);
            }
        );
    };
    useEffect(() => {
        UserService.getAdminBoard().then(
            (response) => {
                setContent(JSON.stringify(response.data));
            },
            (error) => {
                const _content =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setContent(_content);
            }
        );
    }, []);

    return (
        <div className="container">
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs>
                    <CustomizedDialogs title="New Home">
                        <Box component="form" onSubmit={newHome}>
                            <TextField
                                fullWidth
                                required
                                id="home_name"
                                label="Home Name"
                                name="home_name"
                                autoFocus
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Submit
                            </Button>
                        </Box>
                    </CustomizedDialogs>
                </Grid>

                <Grid item xs>
                    <CustomizedDialogs title="New Room">
                        <Box component="form" onSubmit={newRoom}>
                            <TextField
                                fullWidth
                                required
                                id="home_name"
                                label="Home Name"
                                name="home_name"
                                autoFocus
                                sx={{
                                    marginBottom: 2,
                                }}
                            />

                            <TextField
                                fullWidth
                                required
                                id="room_name"
                                label="Room Name"
                                name="room_name"
                                autoFocus
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Submit
                            </Button>
                        </Box>
                    </CustomizedDialogs>
                </Grid>

                <Grid item xs>
                    <CustomizedDialogs title="New Device">
                        <Box component="form" onSubmit={newDevice}>
                            <TextField
                                fullWidth
                                required
                                id="home_name"
                                label="Home Name"
                                name="home_name"
                                autoFocus
                                sx={{
                                    marginBottom: 2,
                                }}
                            />
                            <TextField
                                fullWidth
                                required
                                id="room_name"
                                label="Room name"
                                name="room_name"
                                autoFocus
                                sx={{
                                    marginBottom: 2,
                                }}
                            />
                            <TextField
                                fullWidth
                                required
                                id="device_id"
                                label="Device ID"
                                name="device_id"
                                autoFocus
                                sx={{
                                    marginBottom: 2,
                                }}
                            />

                            <TextField
                                fullWidth
                                required
                                id="device_name"
                                label="Device Name"
                                name="device_name"
                                autoFocus
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Submit
                            </Button>
                        </Box>
                    </CustomizedDialogs>
                </Grid>
                <Grid item xs>
                    <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                        SEND
                    </Button>
                </Grid>
            </Grid>

            <h3>{content}</h3>
        </div>
    );
};

export default BoardAdmin;
