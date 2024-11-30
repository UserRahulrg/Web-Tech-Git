import React from "react";

let AdminUpdate = ()=>{


    let formSubmit = (e)=>{

        e.preventDefault()
        console.log(updateUser)

    }

    return (
        <div>
            <form onSubmit={formSubmit}>
            <h1>Admin update page</h1>
            <label htmlFor="">Name</label>
            <input type="text" /><br /><br />
            <label htmlFor="">email</label>
            <input type="text" /><br /><br />
            <label htmlFor="">PhoneNo</label>
            <input type="number" /><br /><br />
            <label htmlFor="">Password</label>
            <input type="password" />
            <button onClick={formSubmit} >Update User</button>
            </form>
         </div>
    )
}

export default AdminUpdate;