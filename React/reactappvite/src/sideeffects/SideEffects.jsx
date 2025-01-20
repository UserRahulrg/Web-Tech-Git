import React, { useEffect } from "react";
import { useState } from "react";

const SideEffects = ()=>{

    let [apiDATA, setApiData] = useState([]);

    async function callAPI(){
        let resp = await fetch("https://api.github.com/users")
        let data = await resp.json();

        console.log(data)
        setApiData(data);
    }

    useEffect(()=>{
        callAPI();
        console.log("useEffect!!")
    },[])

    return(
        <div>
            <h2>SideEffects!!</h2>
            {apiDATA.map((ele)=>{
                return (
                    <section key={(ele.id)}>
                        <h3>{ele.login}</h3>
                        <img src={ele.avatar_url} height={100} width={100} />
                    </section>
                )
            })}
        </div>
    )
}

export default SideEffects;

