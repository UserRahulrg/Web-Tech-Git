import React, { useState } from "react";


const CounterInFbc = ()=>{

    let [count,setCount] = useState(0);
    let increment = ()=>{
        setCount(count+1)
    };

    let decrement =()=>{
        setCount(count-1)
    };

    let reset = ()=>{
        setCount(0)
    };

    return(
        <div>
            <h1>CounterInFbc</h1>
            <h3>Count {count}</h3>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default CounterInFbc;