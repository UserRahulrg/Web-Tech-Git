import React from "react";

const LogIn = ()=>{

    return(
        <div>
            <h1>LogIn Page</h1>

            <form action="">
                <label htmlFor="">Username</label>
                <input type="text" /><br /><br />
                <label htmlFor="">Password</label>
                <input type="password" /><br /><br />
                <button>SignIn</button><br /><br />
                <a href=""><li>Register</li></a><br />
                <a href=""><li>Forget Password</li></a>
            </form>

        </div>
    )
}

export default LogIn;


