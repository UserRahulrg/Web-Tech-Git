import React from "react";

const Users = ({dbData})=>{
    console.log(dbData)

    return(
        <div>{dbData.map(({id,username,email})=>{
            return(
                <div key={id}>
                    <h1>Username : {id}</h1>
                    <h1>Salary : {username}</h1>
                    <h1>Designation : {email}</h1>
                </div>
            )
        })}</div>
    )
}

export default Users;