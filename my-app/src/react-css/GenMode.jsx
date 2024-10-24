import React from "react";

const Header = () => {
    const lightModeFunct = () => {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    };
  
    const darkModeFunct = () => {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    };
  
    return (
      <div className="headerMain">
        <div className="header" id="headerMain">
          <h2 id="logo">Logo</h2>
          <nav>
            <ul style={{ listStyleType: "none" ,display: "flex", backgroundColor: "inherit"}}>
              <li><a href="">Home</a></li>
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
  