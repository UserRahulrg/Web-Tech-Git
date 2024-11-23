import React, { useState } from "react";
import axios from 'axios';
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {

    let [registerUser, setRegisterUser] = useState({
        username: "",
        useremail: "",
        userpassword: "",
        userphoneno: ""

    });

    let RegisterHandle =(e)=>{
        let {name,value}=e.target
        setRegisterUser({...registerUser,[name]:value})
    }

    let navigate = useNavigate;

    let registerSubmit = (e) => {

        e.preventDefault()
        console.log(registerUser)
        axios
            .post("http://localhost:3000/users", registerUser)
            .then(() => {
                toast.success("Registered Successfully!!")
                //alert("registered successfully")
            })
            .catch(() => {
                toast.error("Not Registered!!")
                navigate("/about");
                //alert("Not registered")
            })
        }


    return (
        <div>
            <form className="" onSubmit={registerSubmit}>
                <br></br>

                <label htmlFor="" >Name</label>
                <input type="text" placeholder="Enter Name" name="username" value={registerUser.username} onChange={RegisterHandle} /><br></br>
                <label htmlFor="" >Email</label>
                <input type="text" placeholder="Enter Email" name="useremail" value={registerUser.useremail} onChange={RegisterHandle} /><br></br>
                <label htmlFor="" >Password</label>
                <input type="password" name="userpassword" value={registerUser.userpassword} onChange={RegisterHandle} /><br></br>
                <label>PhoneNo</label>
                <input type="number" name="userphoneno" value={registerUser.userphoneno} onChange={RegisterHandle} /><br />
                <button type="submit" >Submit</button>
            </form>

            <iframe href="https://www.youtube.com/watch?v=Fb1Z3WdZD1Y" width="640" height="420" >

            </iframe>

        </div>
    )
}

export default Register;



