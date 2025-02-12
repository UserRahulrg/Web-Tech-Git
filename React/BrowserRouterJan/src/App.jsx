import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter , Route, Routes} from "react-router-dom";
import Services from "./Services";
import Contacts from "./Contacts";
import Home from "./Home";
// import Login from "./Login";
import Signup from "./signup/Signup";
import Login from "./login/Login";
import AllProducts from "./allproducts/AllProducts"
import Cart from "./cart/Cart";
import EditProfile from "./editProfile/EditProfile";
import AboutUs from "./aboutUs/AboutUs";
import Profile from "./profile/Profile";
// import Prof

const App = ()=>{

    return(
        <div>
            
            <BrowserRouter>
                
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/services" element={<Services/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                    <Route path="/login" element={<Login></Login>}></Route>
                    <Route path="/signUp" element={<Signup></Signup>}></Route>
                    <Route path="/allProducts" element={<AllProducts/>}></Route>
                    <Route path ="/cart" element={<Cart/>}></Route>
                    <Route path="/aboutUs" element={<AboutUs></AboutUs>}></Route>
                    {/* <Route path="/profile" element={<Profile></Profile>}></Route> */}
                    <Route path="/profile" element={<Profile/>}></Route>
                    <Route path="/editProfile" element={<EditProfile/>}></Route>
                    {/* <Route path="/deleteProfile" element={}></Route> */}

                </Routes>
        
            </BrowserRouter>
            
        </div>
    )
}


export default App;