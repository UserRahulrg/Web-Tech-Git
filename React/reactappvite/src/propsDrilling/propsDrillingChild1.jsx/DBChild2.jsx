import React from "react";

const DBChild2 = ({ props2 }) => {

    console.log(props2)


    return (
        <div>
            <h2>DBChild2</h2>
            
            {props2.map((singleUser) => {
                let { id, name, email, hobbies, profile: { age, gender, address: { street, city, zip } } } = singleUser

                return (
                    <section key={id}>
                        <h3>Id {id}</h3>
                        <h3>Name {name}</h3>
                        <h3>Email {email}</h3>
                        <h3>Hobbies {hobbies}</h3>
                        <h3>Profile {profile.age}</h3>
                        <h3> {profile.gender}</h3>
                        <h3>Address {profile.address.street}</h3>
                        <h3> {profile.address.city}</h3>
                        <h3> {profile.address.zip}</h3>
                    </section>
                )
            }
            )}

        </div>
    )
}

export default DBChild2;