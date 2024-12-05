import React from "react";
import { Link } from "react-router-dom";

const NavBar = ()=>{

    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/login">LogIn</Link></li>
                    <li><Link to="/signup">SignUp</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;