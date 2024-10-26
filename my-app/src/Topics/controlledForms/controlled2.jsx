import React, { useState } from "react";
//import styles from './controlled2css.css'


const Controlled2 = ()=>{

    let [formData, setFormData] = useState({
        name:"",
        email:"",
        password:""
    });

    let handleChange = (e) =>{
        let{ name,value} = e.target;
        console.log({[name]:value})
        console.log({[value]:value})

        //setFormData({...formData,[name]: value});
        return null;
    };

    let handleName = (e)=>{
        console.log("handleName!")
    }

    let handleEmail = (e)=>{
        console.log("handleName!")
    }

    let password = (e)=>{
        console.log("handleName!")
    }

    let email = (e)=>{
        console.log("handleName!")
    }

    let handlePassword = (e)=>{
        console.log("handleName!")
    }

    let name = (e)=>{
        console.log("handleName!")
    }

return(
    <div id="regtForm">
        <form action="formSubmit">
            <h2>Registration Form</h2>
            <label htmlFor="" >Name</label>
            <input type="text" value={name} onChange={handleName} placeholder="Enter Name"/><br />
            <label htmlFor="">Email</label>
            <input type="text" value={email} onChange={handleEmail} placeholder="Enter Email"/><br />
            <label htmlFor="" >Password</label>
            <input type="password" value={password} onChange={handlePassword} placeholder="Enter Password" /><br></br>
            <button id="">Submit</button><br />

        </form>
    </div>
);
};

export default Controlled2;

