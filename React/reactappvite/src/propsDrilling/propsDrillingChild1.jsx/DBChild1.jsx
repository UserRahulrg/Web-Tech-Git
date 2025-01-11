import React from "react";
import DBChild2 from "./DBChild2";

const DBChild1 = ({user})=>{

    return(
        <div>
            <DBChild2 user={user}/>
        </div>
    )

}

export default DBChild1;