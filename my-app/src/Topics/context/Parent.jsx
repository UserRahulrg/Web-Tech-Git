import { createContext } from "react";
import ChildA from "./ChildA";

export let Global = createContext();

/*export let Global = createContext(); */

const Parent = ()=> {
    let data = "Hello World";
    let products = [
        {id:1,title:"Mobile"},{id:2,title:"Laptop"}
    ];
    return(
        <div id="parentDiv">
            <h1>I am Parent Component</h1>
            <Global.Provider value={{data,products}}>
                <childA/>
            </Global.Provider>
            <childA/>
        </div>
    );
};

export default Parent;

