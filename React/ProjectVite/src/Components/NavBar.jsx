import style from './NavBar.module.css';
import React from "react";
import Logout from '../Pages/Logout';
import { Link } from 'react-router-dom';


const NavBar = () => {
let userId = localStorage.getItem("")
    return (
        <nav>
                <aside className={style}>
                <h3>Logo</h3>
                <ul className={style}>
                    <a href="/"><li type="none" href="/" className={style}>Home</li></a>
                    <a href="/About"><li type="none" href="/About" id="about">About</li></a>
                    <a href='/Register'><li type="none" href="/Register" id="register">Register</li></a>
                    <a href=""></a>
                    <a href="/Login"><li type="none" href="/Login" id="login">Login</li></a>

                    {/* userId?(<li onClick={Logout}>Logout</li>) */}
                    {userId ? (
                        <>
                            <li>
                                <Link to="/Register">Register</Link>
                            </li>
                            <li>
                                <Link to="/Login">login</Link>
                            </li>
                        </>) : (
                        <>
                            <li className={style.drop}><Link to="/profile">Profile</Link>
                            <ul className={style.dropdown}>
                                <ul>
                                    <li><Link to="/UpdateProfile">Update Profile</Link></li>
                                    <li>Delete Profile</li>
                                </ul>
                            </ul>
                                <li><Link to="/Logout">Logout</Link></li>
                            </li>
                        </>
                    )}
                </ul>
            </aside>
        </nav>
    )
}

export default NavBar;

