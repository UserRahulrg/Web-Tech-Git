import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Layout from "./Pages/Layout";
import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";

export let myRoutes = createBrowserRouter([
    {
        path:"/",
        element:<Layout></Layout>,
        children:[
    
        {
            path:"/contact",
            element:<Contact/>
        },
        
        {
            path:"/",
            element:<Home/>
        }
        ,{
            path:"/login",
            element:<LogIn/>

        }
        ,{
            path:"/signup",
            element:<SignUp></SignUp>
        }
    ]
}
    
]

)

