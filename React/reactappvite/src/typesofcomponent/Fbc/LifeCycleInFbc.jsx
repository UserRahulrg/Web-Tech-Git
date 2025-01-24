import React, { useEffect } from "react";
import { useState } from "react";
import { useEffect } from "react";

const LifeCycleInfbc = ()=>{

    let [Count,setCount] = useState({value:0})


    useEffect(()=>{
        console.log("Mounting Phase!!")
    },[])

    useEffect(()=>{

        return() =>{

            console.log("UnMounting Phase!!")
        }
    },[]);

    return(
        <div>
            <h2>
                lifecycleInFbc!!
                {Count.value}
            </h2>
            <button onClick={()=>setCount({value:Count.value + 1})}>increment</button>
        </div>
    )
}

export default LifeCycleInfbc;