import React from "react";
import NavBar from "./Components/NavBar";
import style from './Components//NavBar.module.css';
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import {BrowserRouter, Route, Routes} from 'react-router-dom';


const App = () => {

    return (
        <div>
            
            
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Register" element={<Register/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;

