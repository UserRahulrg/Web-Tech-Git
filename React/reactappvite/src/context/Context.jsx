import { createContext } from "react";
import Child3 from "./Child3";
import Child1 from "./Child1";
import Child2 from "./Child2";

export let MyContext = createContext()


const Context = ()=>{

    console.log(MyContext)
    let users = [
        {
            id:1,
            username:"john"
        }
        ,
        {
            id:2,
            username:"Clark"
        },
        {
            id:3,
            username:"bruce"
        }
    ]

    let StringValue = "Hello World"

    return (
    <div>
        <Child1/>
        <Child2/>
        <MyContext.Provider value={StringValue}>
            <Child3/>
        </MyContext.Provider>
    </div>
    )
}

//create a context
//provide a context
//provide a consumer

export default Context;  