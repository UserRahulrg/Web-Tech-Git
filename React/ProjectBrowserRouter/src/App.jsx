import React from "react";
import { myRoutes } from "./Router";
import {  RouterProvider } from "react-router-dom";


const App = ()=>{

    
    return(
         <RouterProvider router={myRoutes}></RouterProvider>
    )
}

export default App;