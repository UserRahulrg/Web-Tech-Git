import React from "react";

const SignUp = ()=>{

    return(
        <div>
            <h1>Register/SignUp Page</h1>

            <form action="">
                <label htmlFor="">Username</label>
                <input type="text" /> <br /><br />
                <label htmlFor="">Email</label>
                <input type="text" /><br /><br />
                <label htmlFor="">Password</label>
                <input type="password" /><br /><br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SignUp;