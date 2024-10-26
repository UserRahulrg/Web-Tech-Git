import React from "react";
import { useState } from "react";

const Header = () => {
    const lightModeFunct = () => {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    };
  
    const darkModeFunct = () => {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    };



    // function ListItem(){
    //   const [isHovering,setIsHovering] = useState(false);
    // }

    // const handleMouseOver = () =>{
    //   setIsHovering(true);
    // }

    // const handleMouseOut = () =>{
    //   setIsHovering(false);
    // }
  
    return (
      <div id="headerMain">
        <div className="header">
          <h2 id="logo">Logo</h2>
          <nav>
            <ul style={{ listStyleType: "none" , display: "flex", backgroundColor: "inherit"}} >
              {/* <li style={{ backgroundColor:isHovering?"green":"blue",color:isHovering?"salmon":"lightblue"}}><a href="">Home</a></li> --> */}
              <li><a href="">Blogs </a></li>
              <li><a href="">Movies</a></li>
              <li><a href="">Contact Us</a></li>
              <li><a href="">Career</a></li>
            </ul>
          </nav>
          <div className="button">
            <button id="lightmode" onClick={lightModeFunct}>Light Mode</button>
            <button id="darkmode" onClick={darkModeFunct}>Dark Mode</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Header;
  