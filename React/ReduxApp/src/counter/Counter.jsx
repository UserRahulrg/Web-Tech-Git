import { useSelector,useDispatch } from "react-redux";
import { decrement, increment, reset } from "../App";

const Counter = ()=>{

    let counterState = useSelector(({counter})=> counter)
    let dispatch = useDispatch();

    return(
        <div>
            <h2>Counter value: {counterState}</h2>
            <button onClick={()=>dispatch(increment("increasing the value"))}>Increment</button>
            <button onClick={()=>dispatch(decrement("Decreasing the value"))}>Decrement</button>
            <button onClick={()=>dispatch(reset("resetting the value"))}>Decrement</button>
        </div>
    )
}

export default Counter;
