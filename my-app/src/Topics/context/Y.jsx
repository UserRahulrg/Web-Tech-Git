import React from "react";
import { GlobalData } from "./ContextApi";
import { useContext } from "react";

const Y = () => {
    let val = useContext(GlobalData);
    console.log(val);

    return(
        <div>
            <h1>Y Component</h1>
            
        </div>
    )

}


export default Y;
