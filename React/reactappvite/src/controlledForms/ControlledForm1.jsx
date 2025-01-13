import { useState } from "react";

const ControlledForm = ()=>{

    let [username,setUsername] = useState("example");
    let [email,setEmail] = useState("example@gmail.com")
    let [password,setPassword] = useState("example123")

    function handleUsername(e){
        setUsername(e.target.value)
    }
    function handleEmail(e){
        setEmail(e.taget.value)
    }
    function handlePassword(){
        setPassword(e.taget.value)
    }

    function formSubmit(e){
        e.preventDefault();
        console.log(username,password,email)
    }

    return(
        <div>
            <h2>Controlled Form-I!!</h2>
            <form>
                <label>Username</label>
                <input type="text" value={username} onChange={handleUsername}></input><br /><br />
                <label>Password</label>
                <input type="password" value={password} onChange={handlePassword}></input><br /><br />
                <label>Email</label>
                <input type="text" value = {email} onChange={handleEmail}></input><br /><br />
                <button type="" onChange={formSubmit}>Submit</button>

            </form>
        </div>
    )
}
export default ControlledForm;