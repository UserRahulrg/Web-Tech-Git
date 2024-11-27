import React, { useEffect } from "react";
import toast from "react-hot-toast";

const UpdateProfile = ()=>{

        let userId = localStorage.getItem("userId")

        useEffect(()=>{
            async function fetchUser() {
                let {data} = await axios.get(`http://localhost:5000/users/{userId}`)
                let [userDetails,setUserDetails] = useState(null)
                console.log(data)
            }

            fetchUser();
            
        },[]);

        let handleChange = (e)=>{
            let {name,value} = e.target 
            setUserDetails({...userDetails,[name]:value});

        }

        let updatedFormSubmit = (e) =>{
            e.preventDefault();
            console.log("Updated Value",userDetails)
            axios.put(`http://localhost:5000/users/{userId}`,userDetails).then(()=>{

                toast.success("Profile Updated!!")

            }).catch((e)=>{
                toast.error("Error......Try after some Time")
                console.log("The error is "+e)
            })
            
        }

    return(
    <div className="parentElement">
        
       <div><h1>Update Profile</h1></div>
       <form onSubmit={updatedFormSubmit}> 
            <ul>
                <label>Name</label>
                <input value="userDetails?.username" name="username" readOnly onChange={handleChange}></input>
                <label>Phone No</label>
                <input value="userDetails?.phoneno" name="phoneno" onChange={handleChange} readonly></input>
                <label htmlFor="">Email</label>
                <input type="text" name="email" onChange={handleChange} readOnly />
                <label htmlFor="">Password</label>
                <input type="password" name="password" onChange={handleChange} readOnly />
                <button type="submit"></button>
            </ul>
        </form>
    </div>
    )
}

export default UpdateProfile;