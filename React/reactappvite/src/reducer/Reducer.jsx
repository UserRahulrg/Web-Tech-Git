import { useReducer } from "react";

let initialState = 0;

function reducerFunc(state,action) {

    switch (action) {

        case "increment":
            return state + 1;

    }
}


const Reducer = () => {

    let [state, dispatch] = useReducer(reducerFunc, initialState)

    return (
        <div>
            <h2>learn reducer!!</h2>
            <h2>Counter: {state}</h2>
            <button onClick={() => dispatch("increment")}>increment</button>

        </div>
    )
}


export default Reducer;