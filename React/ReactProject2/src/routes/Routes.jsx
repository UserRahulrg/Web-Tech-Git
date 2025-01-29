import {createBrowserRouter} from "react-router-dom"
import Layout from "../Layout"
import Login from "../pages/Login"
import SignIn from "../pages/SignIn"

export let Routes = createBrowserRouter([{

    path:"/",
    element:<Layout></Layout>,
    children:[
        {
            element:"/login",
            path:<Login></Login>
        }
        ,{
            element:"/signin",
            path:<SignIn></SignIn>
        }
    ]
}])

