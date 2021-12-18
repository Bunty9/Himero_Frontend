import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";

const BoardUser = () => {
    const [content, setContent] = useState("");

    useEffect(() => {
        UserService.getUserBoard().then(
            (response) => {
                setContent(Array.from(response.data));
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
    const display = Object.keys(content).map((d, key) => {
        return (
            <div className="my-posts">
                <li key={key}>{content[key].housename}</li>
                {Object.keys(content[key]).map((i) => {
                    return <li key={i}>{content[key][i]?.roomname}</li>;
                })}
            </div>
        );
    });

    return (
        <div className="container">
            <header className="jumbotron">
                <h3>User Data</h3>
            </header>
            {display}
        </div>
    );
};

export default BoardUser;

//create new home
//create new room
//create new device

// device service manager to handle axois post requests
