import React from "react"
import { Link, useLocation } from "react-router-dom"

function NotFound () {
    const { pathname } = useLocation();
    return (
        <>
            <h1>404 - Page Not Found</h1>
            <p>Oops! The page '{pathname}' doesn't exist.</p>   
            <Link to="/">Return to Home</Link>
        </>
    )
}

export default NotFound