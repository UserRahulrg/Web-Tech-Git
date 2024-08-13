import {fragement, Fragment} from "react";

import { useState } from "react";

const States = () =>{
    let[state,setState] = useState("Hello js");
    console.log(state);

    function handleChange(){
        console.log("Clicked");
        setState("Hello React");
    }

    return (
        <Fragment>
            <h1>States Example</h1>
            <h1>{States}</h1>
            <button onClick="{handleChange}">
                change
            </button>
        </Fragment>
    );


};

export default States;





