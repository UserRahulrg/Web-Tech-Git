import { useState } from "react";

const ControlledForm2 =()=>{

    let [formData,setFormData]= useState({
        email:"",
        password:""
    })

    function handleChange(e){
        let {name, value} = e.target;
        setFormData({...formData,[name]:value})
    }

    function formSubmit(e){
        e.preventDefault()
        console.log(formData)
    }

    return(
        <div>
            <h2>ControlledForms-II!!</h2>
            <label>Email</label>
            <input type="text" value={email} onChange={handleChange}></input><br /><br />
            <label>Password</label>
            <input type="password" value={password} onChange={handleChange}></input><br /><br />
            <button >Submit</button>
        </div>
    )
}
export default ControlledForm2;