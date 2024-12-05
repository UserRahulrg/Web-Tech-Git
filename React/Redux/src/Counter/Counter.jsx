import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {increment,decrement,reset} from "./counterSlice"


const Counter =()=>{

    let stateVal = useState((state)=>(state))

    let dispatch = useDispatch()



    return(
        <div>
            <h1>Counter {stateVal}</h1>
            <button onClick={()=>dispatch(increment)}>Increment</button>
            <button onClick={()=>dispatch(decrement)}>Decrement</button>
            <button onClick={()=>dispatch(reset)}>Reset</button>
        
        </div>
    )
}

export default Counter;











//Redux Code




// import React from "react";

// const Counter= ()=>{

//     return(
//         <div>
//             <h1>This is Counter</h1>
//         </div>
//     )
// }

// export default Counter;