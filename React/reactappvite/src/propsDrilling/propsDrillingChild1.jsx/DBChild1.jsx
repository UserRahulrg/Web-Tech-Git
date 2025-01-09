import React from "react";
import DBChild2 from "./DBChild2";

const DBChild1 = (users)=>{

    return(
        <div>
            <DBChild2 props2={users}/>
        </div>
    )

}

export default DBChild1;