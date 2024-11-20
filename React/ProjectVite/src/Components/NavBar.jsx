import style from './NavBar.module.css';
import React from "react";
import {Link} from "react-router-dom";

const NavBar = () => {

    return (
        <nav>
            <aside className={style.logo}>
                <h3>Logo</h3>
                <ul className={style.menu}>
                    <li type="none" href="/">Home</li>
                    <li type="none">About</li>
                    <li type="none" href="/Register">Register</li>
                    <li type="none">Login</li>
                </ul>
            </aside>
        </nav>
    )
}

export default NavBar;