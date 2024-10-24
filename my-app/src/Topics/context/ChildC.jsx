import React from "react";
import { useContext } from "react";
import { Global } from "./Parent";

const ChildC = () =>{

    let val = useContext(Global);
    console.log(val);

    return(
        <div>
            <h1>I am Child C.</h1>
        </div>
    );
} ;

export default ChildC;

