import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";

const Login = () => {

    let [loginUser, setLoginUser] = useState({
        useremail: "",
        userpassword: ""
    });
    /** localstorage.getItem(key) = 
     * 
     * if(id!=null){
     *  
     * }
     */
    let loginHandle = (e) => {
        let { name, value } = e.target;
        setLoginUser({ ...loginUser, [name]: value })
    }

    useEffect(() => {
        async function fetchRegisteredUser() {
            let { data } = await axios.get("http://localhost:3000/users");
            setAllRegistredUserData(data)
        }
        fetchRegisteredUser()
    }, [])

    let loginSubmit = (e) => {
        e.preventDefault();
        let authUser = allRegisteredUser.find((user) => {
            return (
                user.useremail === loginUser.useremail &&
                user.password === loginUser.password
            )
        })
        console.log(loginUser)

        // if(authUser){
        //     toast.success(`Welcome` ${authUser.username})
        //     localStorage.setItem("userId",authUser.id);
        //     Navigate("/Profile")

        // }

        if (authUser) {
            toast.success(`Welcome ${authUser.username}`)
            localStorage.setItem("userID",authUser.id)
            Navigate("/Profile")
        }
        else {
            toast.error("E.r.r.o.r............error")
            Navigate("/Register")
        }
    }

    return (

        <div>
            <h1>Login Page</h1>
            <form onSubmit={loginSubmit} >
                <label htmlFor="">UserId/Email:</label>
                <input type="text" name="username" value={loginUser.username} onChange={loginHandle} />
                <br /><br /><label htmlFor="">Password:</label>
                <input type="password" name="password" value={loginUser.password} onChange={loginHandle} />
                <br /><br /><button type="submit">Login</button>
            </form>
        </div>

    )
}

export default Login;





