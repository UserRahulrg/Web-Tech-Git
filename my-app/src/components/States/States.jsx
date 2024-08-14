import {fragement, Fragment} from "react";

import React, { useState } from "react";

const States = () =>{
    let[state,setState] = useState("Hello javascript");
    console.log(state);

    // function handleChange(){
    //     console.log("Clicked");
    //     setState("Hello Java");
    // }

    return (
        // <Fragment>
        //     <h1>States Example</h1>
        //     <h1>{States}</h1>  
        //     <button onClick={handleChange}>
        //         change
        //     </button>
            
        // </Fragment>

        <div>
            <h1>{state}</h1>
            <button onClick={() => setState("Byee")}>Change</button>
        </div>
    );

};

export default States;





