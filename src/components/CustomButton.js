import adminService from "../services/admin.service";
import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const CustomButton = (props) => {
    const [selected, setSelected] = React.useState(false);
    const toggle = async () => {
        await adminService
            .flip(props.device_id, props.deviceid, !selected)
            .then(
                (response) => {
                    console.log(response.data);
                },
                (error) => {
                    console.log(error.message);
                }
            );
    };

    return (
        <Device
            selected={selected}
            variant="contained"
            size="small"
            color={selected ? "success" : "error"}
            onClick={() => {
                setSelected(!selected);
                toggle();
            }}
        >
            {props.children}
        </Device>
    );
};

export default CustomButton;

const Device = styled(Button)`
    margin: 2em;
    max-width: 150px;
    margin-left: 10px;
`;
