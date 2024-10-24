import { createContext } from "react";

export let GlobalData = createContext();

const ContextApi = (props) =>{
    let data = "Hello World";
    console.log(props);

    return(
        <GlobalData.Provider value = {data}>{props.children}</GlobalData.Provider>
    );

};

export default ContextApi;

