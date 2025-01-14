import { useState } from "react";

const ControlledForm2 =()=>{

    let [formData,setFormData]= useState({
        email:"qwerty@gmail.com",
        password:"123456"
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
            <form onSubmit={formSubmit}>
            
            <label>Email</label>
            <input type="text" value={formData.email} onChange={handleChange}></input><br /><br />
            <label>Password</label>
            <input type="password" value={formData.password} onChange={handleChange}></input><br /><br />
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default ControlledForm2;



