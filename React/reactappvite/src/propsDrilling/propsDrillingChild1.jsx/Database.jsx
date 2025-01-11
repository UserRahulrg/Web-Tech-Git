import React from "react";
import DBChild1 from "./DBChild1";

const Database = ()=>{

    let user = [
            {
              id: 1,
              name: "Alice Johnson",
              email: "alice.johnson@example.com",
              profile: {
                age: 25,
                gender: "female",
                address: {
                  street: "123 Main St",
                  city: "New York",
                  zip: "10001",
                },
              },
              hobbies: ["reading", "traveling", "coding"],
              isActive: true,
              roles: ["admin", "editor"],
            },
            {
              id: 2,
              name: "Bob Smith",
              email: "bob.smith@example.com",
              profile: {
                age: 30,
                gender: "male",
                address: {
                  street: "456 Elm St",
                  city: "San Francisco",
                  zip: "94101",
                },
              },
              hobbies: ["gaming", "cycling"],
              isActive: false,
              roles: ["viewer"],
            },
            {
              id: 3,
              name: "Carol Brown",
              email: "carol.brown@example.com",
              profile: {
                age: 28,
                gender: "female",
                address: {
                  street: "789 Oak St",
                  city: "Chicago",
                  zip: "60601",
                },
              },
              hobbies: ["painting", "dancing"],
              isActive: true,
              roles: ["editor"],
            },
            {
              id: 4,
              name: "David Wilson",
              email: "david.wilson@example.com",
              profile: {
                age: 35,
                gender: "male",
                address: {
                  street: "321 Pine St",
                  city: "Seattle",
                  zip: "98101",
                },
              },
              hobbies: ["hiking", "photography"],
              isActive: true,
              roles: ["admin"],
            },
            {
              id: 5,
              name: "Emma Davis",
              email: "emma.davis@example.com",
              profile: {
                age: 22,
                gender: "female",
                address: {
                  street: "654 Maple St",
                  city: "Austin",
                  zip: "73301",
                },
              },
              hobbies: ["writing", "yoga"],
              isActive: false,
              roles: ["viewer"],
            },
            {
              id: 6,
              name: "Frank Miller",
              email: "frank.miller@example.com",
              profile: {
                age: 40,
                gender: "male",
                address: {
                  street: "987 Birch St",
                  city: "Denver",
                  zip: "80201",
                },
              },
              hobbies: ["gardening", "woodworking"],
              isActive: true,
              roles: ["admin", "moderator"],
            },
            {
              id: 7,
              name: "Grace Lee",
              email: "grace.lee@example.com",
              profile: {
                age: 27,
                gender: "female",
                address: {
                  street: "159 Cedar St",
                  city: "Portland",
                  zip: "97201",
                },
              },
              hobbies: ["baking", "blogging"],
              isActive: false,
              roles: ["editor"],
            },
            {
              id: 8,
              name: "Henry Moore",
              email: "henry.moore@example.com",
              profile: {
                age: 33,
                gender: "male",
                address: {
                  street: "753 Willow St",
                  city: "Boston",
                  zip: "02101",
                },
              },
              hobbies: ["fishing", "puzzles"],
              isActive: true,
              roles: ["viewer"],
            },
            {
              id: 9,
              name: "Ivy Clark",
              email: "ivy.clark@example.com",
              profile: {
                age: 29,
                gender: "female",
                address: {
                  street: "852 Cherry St",
                  city: "Atlanta",
                  zip: "30301",
                },
              },
              hobbies: ["knitting", "gardening"],
              isActive: true,
              roles: ["moderator"],
            },
            {
              id: 10,
              name: "Jack White",
              email: "jack.white@example.com",
              profile: {
                age: 24,
                gender: "male",
                address: {
                  street: "951 Spruce St",
                  city: "Dallas",
                  zip: "75201",
                },
              },
              hobbies: ["skating", "reading"],
              isActive: false,
              roles: ["viewer"],
            },
          ];
          
          console.log(user);
    
    return(
        <div>
            <DBChild1 user={user} />
        </div>
    )
}

export default Database;
