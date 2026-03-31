import React from "react";
import { Link, NavLink } from "react-router-dom";
import './NavBar.css'
function NavBar() {
    return (
        <nav>
            <NavLink to={"/"} className={({ isActive }) => (isActive ? "active-1" : "")}>
                Home
            </NavLink>
            {" | "}
            <NavLink to={"/blogs"} className={({ isActive }) => (isActive ? "active-1" : "")}>
                Blogs
            </NavLink>
            {" | "}
            <Link to={'/blogs/1'}>
                Blog#1
            </Link>
        </nav>
    )
}

export default NavBar