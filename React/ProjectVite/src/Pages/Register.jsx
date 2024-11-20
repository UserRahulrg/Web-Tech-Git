import React from "react";

const Register =()=>{

    return (
        <div>
            <form>
                <br></br>

            <label htmlFor="" >Name</label>
            <input type="text" placeholder="Enter Name" /><br></br>
            <label htmlFor="" >Email</label>
            <input type="text" placeholder="Enter Email" /><br></br>
            <label htmlfor="" >Password</label>
            <input type="password"/><br></br>
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Register;
