import style from './NavBar.module.css';
import React from "react";
import Logout from '../Pages/Logout';

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

                   {userId?(<li onClick={Logout}>LogOut</li>):(
                    <>
                        <li>
                            <Link to="/Register">Register</Link>
                        </li>
                        <li>
                            <Link to ="/Login">login</Link>
                        </li>
                    </>
                   )
                   } 
                </ul>
            </aside>
        </nav>
    )
}

export default NavBar;