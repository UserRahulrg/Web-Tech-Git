import React, { useState } from "react";


const controlled = ()=>{
    let[name,setName] = useState("user");
    let[email,setEmail] = useState("email");
    let[password,setPassword] = useState("password");
    
    let HandleName = (e)=>{
        console.log(e.target.value);
        setName(e.target.value);

    };
    let HandleEmail = (e)=>{
        console.log(e.target.value);
        setEmail(e.target.value);

    };
    let HandlePassword = (e)=>{
        console.log(e.target.value);
        setPassword(e.target.value);

    };
    return(
        <div>
            <form action="formSubmit">
                <label htmlFor="" >Name</label>
                <input type="text" value={name} onChange={handleName}/><br />
                <label htmlFor="">Email</label>
                <input type="text" value={email} onChange={handleEmail}/><br />
                <label htmlFor="" >Password</label>
                <input type="password" value={password} onChange={handlePassword}/>
                <button id="">Submit</button>

            </form>
        </div>
    );
};


