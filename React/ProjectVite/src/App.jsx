import React from "react";
import NavBar from "./Components/NavBar";
import style from './Components//NavBar.module.css';
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import About from "./Pages/About";
import {Toaster} from 'react-hot-toast';
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
 import PrivateRoute from "./Components/PrivateRoute";
 import Logout from "./Pages/Logout";
 

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
                </Routes>
            </BrowserRouter>
    </div>
    )
}

export default App;

