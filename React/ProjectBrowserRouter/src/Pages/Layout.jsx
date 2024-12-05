import React from "react";
//import NavBar from "../components/NavBar";
import { Suspense } from "react";
import { lazy } from "react";
const NavBar = lazy(() =>import("../components/NavBar"))
import { Outlet } from "react-router-dom";


const Layout = ()=>{

    return(
        <div>
            <NavBar></NavBar>
            <Suspense fallback={"Loading........"} >
            <Outlet></Outlet>
            </Suspense>
        </div>
    )
}

export default Layout;
