import style from './NavBar.module.css';
import React from "react";

const NavBar = () => {

    return (
        <nav>
            <aside className={style.logo}>
                <ul className={style.menu}>
                    <li type="none">home</li>
                    <li type="none">about</li>
                    <li type="none">register</li>
                    <li type="none">login</li>
                </ul>
            </aside>
        </nav>
    )
}

export default NavBar;