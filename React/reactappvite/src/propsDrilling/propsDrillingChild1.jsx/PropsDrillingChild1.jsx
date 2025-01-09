import React from "react";
import PropsDrillingChild2 from "./PropsDrillingChild2";

const PropsDrillingChild1 = (str1)=>{

    return(
        <div>
            <h2>Child 1</h2>
            <PropsDrillingChild2/>
            <p>{str1.id}</p>
            <p>{str1.username}</p>
            <p>{str1.email}</p>

        </div>
    )
}

export default PropsDrillingChild1;