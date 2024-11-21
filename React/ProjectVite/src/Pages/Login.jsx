import React, { useState } from "react";

const Login =()=>{

    const login = ()=>{
        let[loginUser,setLoginUser] = useState({
            useremail:"",
            userpassword:""
        });
    }

    loginHandle =(e)=>{
        let {name, value} = e.target;
        setLoginUser({...loginUser,name:[value]})
    }

    let loginSubmit = (e)=>{
        e.preventDefault();
        console.log(loginUser)
    }

    return (

        <div>
            <h1>Login Page</h1>
            <form action="loginSubmit">
                <label htmlFor=""></label>
                <input type="text" name="username" value={loginUser.username} onChange={loginHandle} />
                <label htmlFor=""></label>
                <input type="text" />
                <button>Login</button>
            </form>
        </div>

        )
}

export default Login;

