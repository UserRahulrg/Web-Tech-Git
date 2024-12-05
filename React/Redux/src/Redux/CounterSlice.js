import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:"counter",
    initialState: 0,
    reducers:{
        increment:()=>{
            return state = state + 1
        },
        decrement:()=>{
            return state = state - 1
        },
        reset:()=>{
            return reset = 0
        }
    }
})

export const {increment,decrement,reset} = counterSlice.action;