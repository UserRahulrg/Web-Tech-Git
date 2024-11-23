import style from './NavBar.module.css';
import React from "react";


const NavBar = () => {

    return (
        <nav>
            <aside className={style}>
                <h3>Logo</h3>
                <ul className={style}>
                    <li type="none" href="/">Home</li>
                    <a href=""><li type="none" href="">About</li></a> 
                    <a><li type="none" href="/Register">Register</li></a>
                   <a href=""><li type="none" href="src/Pages/Login.jsx">Login</li></a> 
                </ul>
            </aside>
        </nav>
    )
}

export default NavBar;