import {React, useState } from "react";
import axios from "axios"

const Register = ()=>{

    let [registerUpUser,setRegisterUser] = useState({

        email:"",
        username:"",
        password:""
    })

    const handleChange = (e)=>{

        const {name,value} = e.target
        setRegisterUser({...registerUpUser,[name]:value})

    }

    let formSubmit = async (e)=>{
        e.preventDefault();
        try {
            let axiosSaveData = await axios.post("http://localhost:3000/userData",registerUpUser)
            console.log(axiosSaveData)
        } catch (error) {
            console.log(error)
        }
    
    }

    console.log(registerUpUser);

    return(
        <div>
            <h2>RegisterPage</h2>
            <div className="form">
                <form onSubmit={formSubmit}>
                    <label htmlFor="" >Email</label><br />
                    <input type="text" name="email" value={registerUpUser.email} onChange={handleChange} /><br />
                    <label htmlFor="" >Username</label><br />
                    <input type="text" name="username" value={registerUpUser.username} onChange={handleChange}/><br />
                    <label htmlFor="">Password</label><br />
                    <input type="password" name="password" value={registerUpUser.password} onChange={handleChange} /><br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
} 

export default Register;