import axios from "axios";
import React, { useEffect, useState } from "react";

const Admin = ()=>{

    let [allusers,setAllUsers] =useState(null)
    useEffect(()=>{
        async function fetchAllRegisteredUser(){
            let {data} = await axios.get("http://localhost:5000/users")
            setupdateState(data)
            console.log(data)
            setAllUsers(data)

        }

        fetchAllRegisteredUser()
    },[])

    let deleteUser = (x)=>{s

        console.log("Deleted",x)

        axios
            .delete(`http://localhost:5000/users/{x}`)
            
            .then(()=>{
                toast.success("User Deleted Successfully!!")
                setToggle(!toggle)
                //window.location.reload
            })

            .catch(()=>{
                toast.error("Error.......")
            })
            
    }

    let [updateUserState,setupdateState] = useState(null)

    // ceaterouterbrowser
    //crud operations using api

    return (
        <div>
            <h1>Admin Page</h1>
            <section key={id}>
                <h1>Name: {username}</h1>
                <h1>Email: {email}</h1>
                <h1>PhoneNo: {phoneno}</h1>
                <h1>Password: {password}</h1>
                <button onClick={deleteUser(id)}>Delete User</button>
                <li>Update Admin<Link to="/UpdateAdmin"></Link></li>   
            </section>
        </div>
    )
}

export default Admin

