import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

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

        if (authUser) {
            toast.success("Welcome")
        }
        else {
            toast.error("Lol......error")
        }
    }

    return (

        <div>
            <h1>Login Page</h1>
            <form onSubmit={loginSubmit} >
                <label htmlFor=""></label>
                <input type="text" name="username" value={loginUser.username} onChange={loginHandle} />
                <label htmlFor=""></label>
                <input type="text" name="password" value={loginUser.password} onChange={loginHandle} />
                <button type="submit">Login</button>
            </form>
        </div>

    )
}

export default Login;





