import React from "react";

const DBChild2 = (user) => {

    console.log(user)


    return (
        <div>
            <h2>DBChild2</h2>
            
            {user.map((singleUser) => {
                let { id, name, email} 
                    // hobbies, profile: { age, gender, address: { street, city, zip } } } 
                    = singleUser

                return (
                    <section key={id}>
                        <h3>Id {id}</h3>
                        <h3>Name {name}</h3>
                        <h3>Email {email}</h3>
                        {/* <h3>Hobbies {hobbies}</h3>
                        <h3>Profile {profile}</h3>
                        <h3>Age {age}</h3>
                        <h3> {gender}</h3>
                        <h3>Address {street}</h3>
                        <h3> {city}</h3>
                        <h3> {zip}</h3> */}
                    </section>
                )
            }
            )}

        </div>
    )
}

export default DBChild2;