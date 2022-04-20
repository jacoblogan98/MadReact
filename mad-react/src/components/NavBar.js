import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {
    return (
        <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/form/:id">Stories Form</NavLink>
            <NavLink to="/saved">Saved Stories</NavLink>
        </nav>
    )
}

export default NavBar