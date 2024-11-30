import style from './NavBar.module.css';
import React from "react";
import Logout from '../Pages/Logout';
import { Link, Navigate } from 'react-router-dom';
import toast from 'react-hot-toast';


const NavBar = () => {
                let userId = localStorage.getItem("")

                let deleteUser = ()=>{

                    axios
                            delete(`http://localhost:5000/users/${userId}`)
                            .then(()=>{
                                toast.success("account deleted")
                                localStorage.removeItem("userId")
                                Navigate("/register")
                            })
                            .catch(()=>{
                                toast.error("Something went Wrong.....Try after some time")
                            })


                }

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
                    <a href="/"><Link to="/AdminUpdate"></Link></a>

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
                                    <button onClick={deleteUser}>Delete Data</button>
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

