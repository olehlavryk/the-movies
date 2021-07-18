import React, { useEffect } from "react";
import {
    Redirect,
} from "react-router-dom";

const TVShows = () => {
    useEffect(() => {
        alert("This page is under construction");
    }, [])

    return (<Redirect to="/" />)
}

export default TVShows;