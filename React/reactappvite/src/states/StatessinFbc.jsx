import React from "react";
import { useState } from "react";

const StatesInFbc =()=>{
let [state,setState] = useState("State");
console.log(state);

function update(){
    setState("clicked!");
}

    return(
    <div>
        <h1>StatesInFbc {state}</h1>
        <button onClick={update}>Click</button>
    </div>
    )
}

export default StatesInFbc;

