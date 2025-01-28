import React, { useRef } from "react";


const UncontrolledForms = ()=>{

    let usernameRef = useRef()
    let emailRef = useRef()
    let passwordRef = useRef()

    function formSubmit(e){

        e.preventDefault();
        console.log("form Submitted!!")
        console.log(usernameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);

        let userData = {

            username: usernameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        }

        console.log(userData)
    }

    return(
        <div>
            <h2>UnControlled Forms!!</h2>
            <form onSubmit={formSubmit}>
                <label>Username</label>
                <input ref={usernameRef}></input><br /><br />
                <label>Email</label>
                <input ref={emailRef}></input><br /><br />
                <label >Password</label>
                <input ref={passwordRef} type="password"></input><br /><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default UncontrolledForms;