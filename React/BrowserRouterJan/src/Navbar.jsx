import axios from "axios";
import styles from "./src.module.css"
import { NavLink, useParams } from "react-router-dom";
import { useEffect } from "react";
// import script from "./srcJavascript.js"

const Navbar =()=>{
/*
    let handleAddToCartProduct(product) = ()=>{

        return null;
    }


    
    */
    function varDropdownFunct(){
        let varDropdown  = document.getElementById("dropdownDiv");
        varDropdown.setAttribute('display','list-item');
    }
    
   
    /*
    let varDropdownFunct = (e)=>{
        let varDropdown  = document.getElementById("dropdownDiv");
        varDropdown.setAttribute('display','list-item');

    }
        */

    let {id} = useParams();
    console.log(id)

    useEffect(()=>{

        async function name(params) {
            
        }
    })

    let user_id = localStorage.getItem(id);

    const deleteProfile= async ()=>{

        console.log("Profile Deleted!!")
        let confirmation = confirm("Are you Sure?");
        console.log(confirmation)
        
        if(confirmation){

            try {
                
                await axios.delete('https://localhost:5173/users/${user_id') ;
                alert("profile deleted")
                logout()

            } catch (error) {
                
                console.log("unable to delete",error);
                alert("unable to delete!!")         

            }
        }
        else{

        }
    }

    return(<div id={styles.divNavBar}>
        <ul id={styles.ulNavBar}>
            <li type="none"><a href="/">Home</a></li>
            {/* <li type="none"><a href="/services">Services</a></li> */}
            <li type="none"><a href="/contacts">Contacts</a></li>
            <li type="none"><a href="/signUp">SignUp</a></li>
            <li type="none"><a href="/login">LogIn</a></li>
            <li type="none"><a href="/aboutUs">AboutUs</a></li>
            <li type="none"><a href="/allProducts">AllProducts</a></li>
            <li type="none" onClick={varDropdownFunct}><a href="/profile" >Profile</a></li>
            <div className="dropdownDiv" id={styles.dropdownDiv}>
                <li type="none"><a href="/cart" >Cart</a></li>
                {/* <li type="none"><a href="/editProfile">Edit Profile</a></li> */}
                {/* <li><a href="/deleteProfile">Delete Profile</a></li> */}
                <NavLink to={`/edit/${user_id}`}>EditProfile</NavLink>
            </div>
        </ul>
        
    </div>)
}

export default Navbar;