import Counter from "./Counter/Counter";
import {counterSlice} from "./Counter"

import { Provider } from "react-redux";
import {myStore} from "./Counter"

const App=()=>{

    return(
        <div>
            <Provider store={myStore}>
                <Counter/>
            </Provider>
            
            
        </div>
    )
}

export default App;




















// ! Redux setup in the same file
// ! Redux setup using proper folder structure


//
// import React from "react";
// import { configureStore } from "@reduxjs/toolkit";
// import { Provider } from "react-redux";


// const counterSlice = CreateSlice({
//     name: "counter",
//     initialState: 0,
//     reducers:{
//         increment:(state,action)=>{

            
//         }
//     }
// })

// // const App = ()=>{

// //     return (
// //         <div>

// //         </div>
// //     )
// // }

// export default App;