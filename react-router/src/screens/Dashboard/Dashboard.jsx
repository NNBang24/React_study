import React from "react";
import { Outlet } from "react-router-dom";

function Dashboard () {
    return (
        <>
        <h1>
            DashBoard
        </h1>
        <Outlet/>
        </>
    )
}

export default Dashboard