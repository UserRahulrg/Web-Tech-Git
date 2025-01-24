import { useState } from "react";

const Memo = ()=>{

    let [count,setCount] = useState(0)
    let [add,setAdd] = useState(0)
    let [minus,setMinus] = useState(100)
    
    /*
    let memorizedVal = useMemo(()=>{

        let add = 10;
        console.log("multiply")
        return add * 10;
    },[])

    */
   
    return (
        <div>
            <h2>This is Memo!</h2>
            <h2>Count : {count}</h2>
            <button onClick={()=>{setCount(count + 1)}}>increment</button>
            <h2>Minus : {minus}</h2>
            <button onClick={()=>{setMinus(minus - 1)}}>decrement</button>
            {/* <h2>Multiplication {memorizedVal}</h2> */}
            <button>Count</button>
        </div>
    )
}

export default Memo;