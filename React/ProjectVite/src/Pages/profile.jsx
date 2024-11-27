import axios from "axios";
import React, { useEffect, useState } from "react";

const Profile = ()=>{

    let [profileUser,setprofileUser] = useState[null]

    let userId = localStorage.getItem("UserId")

    useEffect(()=>{
        async function fetchAuthUser(){
        
        let {data} = await axios.get(`https:localhost:5000/users/${userId}`)
        console.log(data)

        setprofileUser(data);
        }
    fetchAuthUser();
    },[]
    )

    useEffect(()=>{
        async function fetchAuthUser2(){

            let {data2}= await axios.get(`https://api.github.com/users`)
            console.log(data2)

            setprofileUser(data2)
        }
        fetchAuthUser2()
    },[]
        )

    return <div>

        <div>
            <h1>Welcome?{profileUser?.username}</h1>
            {ApiUsers?.map((users)=>{
                let {login,avatar_url,html_url,type,id} = users;

                return(
                    <section key={id}>
                        <h1>
                            <img src={avatar_url} height={200} width={200}></img>
                        </h1>

                    </section>
                )

                })}
        </div>

        <h1>Welcome {profileUser?.userId}</h1>

    </div>
}

const Profile2 = ()=>{

    return "Profile"
}

export default Profile;



