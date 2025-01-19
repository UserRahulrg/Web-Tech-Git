import React,{ useState } from "react";
import styles from  "./fetchApiCss.module.css";

const Fetch = ()=>{

let [allUsers,setAllUsers] =useState([]);

    async function getAllUsers() {

        console.log("");
        let resp = await fetch("https://api.github.com/users")
        let data = await resp.json();
        setAllUsers(data)
        console.log(data)
    }

    return(
        <div id={styles.divMain}>
            <h2 >Fetch Api!!</h2>
            <button onClick={getAllUsers}>getAllApis</button>
            {
                allUsers.map((ele)=>{

                    let{id,login,avatar_url,type,site_admin} = ele;

                    return(
                        <div className={styles.sectionMainDiv}>
                            <h2>----------------User - {id} ------------------</h2>
                            <section id={styles.sectionMain} key={id}>
                            <img src={avatar_url} alt="" height="200" width ="200" />
                            <div className={styles.userData}>
                            <h3>Name: {login}</h3>
                            <h3>Type: {type}</h3>
                            <h3>Site: {site_admin ? "Admin" : "User"}</h3>
                            </div>                            
                       </section>

                        </div>
                    )

                    
                })
            }
        </div>
    )
}

export default Fetch;