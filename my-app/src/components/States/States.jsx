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
    <div id='statesDiv'>
        {/* <Fragment>
            <h1>States Example</h1>
            <h1>{States}</h1>  
            <button onClick={handleChange}>
                change
            </button>        
        </Fragment> */}


            <h1>{state}</h1>
            <button onClick={() => setState("Hellio React!")}>Change</button>
        </div>
    );

};

export default States;





