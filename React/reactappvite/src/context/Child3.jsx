import { useContext } from "react";
import { MyContext } from "./Context";

const Child3 = ()=>{

    let val = useContext(MyContext)
    console.log(val)
    
    return(
        <div>
            <h2>Child3</h2>
        </div>
    )
}

export default Child3;