import React from "react";
import NavBar from "./Components/NavBar";

import Home from "./Pages/Home";
import Register from "./Pages/Register";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import About from "./Pages/About";
import {Toaster} from 'react-hot-toast';
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
 import PrivateRoute from "./Components/PrivateRoute";
 import Logout from "./Pages/Logout";
import UpdateProfile from "./Pages/UpdateProfile";
import Admin from "./Pages/Admin"; 
import AdminUpdate from "./Pages/AdminUpdate";

const App = () => {

    return (
    <div>
        <Toaster/>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Register" element={<Register/>}></Route>
                    <Route path="/About" element={<About/>}></Route>
                    <Route path="/Login" element={<Login/>}></Route>
                    <Route path="/Profile" element={<PrivateRoute><Profile/></PrivateRoute>}></Route>
                    <Route path="/Logout" element={<Logout/>}></Route>
                    <Route path="/UpdateProfile" element={<PrivateRoute><UpdateProfile/></PrivateRoute>}></Route>
                    <Route path="/Admin" element={<PrivateRoute><Admin/></PrivateRoute>}></Route>
                    <Route path="/adminupdate/:id" element={<PrivateRoute><Admin/></PrivateRoute>}></Route>
                    <Route path="/AdminUpdate" element={<PrivateRoute><AdminUpdate/></PrivateRoute>}></Route>
                </Routes>
            </BrowserRouter>
    </div>
    )
}

export default App;

