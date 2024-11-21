import style from './NavBar.module.css';
import React from "react";


const NavBar = () => {

    return (
        <nav>
            <aside className={style}>
                <h3>Logo</h3>
                <ul className={style}>
                    <li type="none" href="/">Home</li>
                    <a href=""><li type="none" href="/About">About</li></a> 
                    <li type="none" href="/Register">Register</li>
                    <li type="none">Login</li>
                </ul>
            </aside>
        </nav>
    )
}

export default NavBar;