import {fragment,useState} from "react";

const Counter = () => {
    let [count, setCount] = useState(0);

    let incre = () => {setCount(count+1)};

    let decre = () => {setCount(count-1)};

    let reset = () => {setCount(0)};

    return (
        <fragment>
            <h1>Counter = {count}</h1>
            <button onClick={incre}>increment</button>
            <button onClick={decre}>decrement</button>
            <button onClick={reset}>reset</button>
            <h2>❤️ <sup>{count}</sup></h2>

                   <div>
            <h1 style={{backgroundColor:"black",color:"white"}}>Inline Background</h1>
                    </div>     
        </fragment>
        
    );

};

export default Counter;














