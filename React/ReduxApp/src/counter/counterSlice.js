import { createSlice } from "@reduxjs/toolkit";
//  import { increment,decrement } from "../App";
// import { createSlice } from "@reduxjs/toolkit";

export let counterSlice = createSlice({
    name: "counter",
    initialState: 0,
    reducers:{
        increment:(state,action)=>{
            return state + 1;
        },
        decrement:(state,action)=>{
            return state - 1;
        }
        ,
        reset:(state,action)=>{
            return 0;
        }
    }
})

