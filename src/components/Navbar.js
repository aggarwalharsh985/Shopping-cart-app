import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <NavLink to="/">
                <img alt="" src="../logo.png" className="h-14"/>
            </NavLink>

            <div>
                <NavLink to="/">
                    <p>Home</p>
                </NavLink>
                <NavLink to="/cart">
                    <div>
                    <FaShoppingCart />
                    </div>
                </NavLink>
            </div>
        </div>
    )
}
export default Navbar