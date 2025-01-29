import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { RouterProvider } from "react-router-dom";
//import {RouterProvider} from "react-router-dom";
import { Routes } from "./routes/Routes";

const App = ()=>{

    return(
        <div>
            {/* <Navbar/> */}
            <h2>FileApp</h2>
            <RouterProvider router={Routes}></RouterProvider>
        </div>
    )
}

export default App;
