import React, { useState, useEffect } from "react";
import styled from "styled-components";
import UserService from "../services/user.service";
import CustomButton from "./CustomButton";

const BoardUser = () => {
    const [content, setContent] = useState("");

    useEffect(() => {
        UserService.getUserBoard().then(
            (response) => {
                setContent(response.data);
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
    console.log(content);

    const display = Object.keys(content).map((key) => {
        return (
            <Home key={content[key][0]?.housename} className="my-posts">
                <HouseName key={content[key][0]?.housename}>
                    {content[key][0]?.housename}
                </HouseName>
                {content[key][1]?.map((item) => {
                    return (
                        <Room key={item?.roomname}>
                            <RoomName key={item?.roomname}>
                                {item?.roomname}
                            </RoomName>
                            {item?.device.map((device) => {
                                return (
                                    <CustomButton
                                        key={device._id}
                                        device_id={device._id}
                                        deviceid={device.deviceid}
                                        devicename={device.devicename}
                                    >
                                        {device.devicename}
                                    </CustomButton>
                                );
                            })}
                        </Room>
                    );
                })}
            </Home>
        );
    });

    return <div className="container">{display}</div>;
};

export default BoardUser;

//create new home
//create new room
//create new device

// device service manager to handle axois post requests

// room

const HouseName = styled.p`
    padding: 10px;
    font-family: Montserrat;
    font-size: 30px;
    text-transform: uppercase;
    font-weight: 600;
`;

const Home = styled.div``;
const Room = styled.div`
    display: flex;
    margintop: 0;
`;

const RoomName = styled.p`
    padding: 10px;
    font-family: Montserrat;
    font-size: 20px;
    text-transform: uppercase;
    font-weight: 600;
    margin-left: 30px;
`;
// const Device = styled(CustomButton)`
//     margin: 2em;
//     max-width: 150px;
//     margin-left: 10px;
// `;
