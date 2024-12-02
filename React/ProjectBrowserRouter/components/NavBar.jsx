import React from "react";

const NavBar = ()=>{

    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link>Home</li>
                    <li>Contacts</li>
                    <li>LogIn</li>
                    <li>SignUp</li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;