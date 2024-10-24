import react from 'react';
import style from './NewInlineCssExampleCss.css';
import script from './NewInlineCssExampleJavascript';

const NewInlineCssExample =() =>{
    return (

        <div className="headerMain">

        
            <div className="header" id="headerMain">
                <h2 id="logo">Logo</h2>
                <nav>
                    <li type="none"><a href="">Home</a></li>
                    <li type="none"><a href="">Blogs </a></li>
                    <li type="none"><a href="">Movies</a></li>
                    <li type="none"><a href="">Contact Us</a></li>
                    <li type="none"><a href="">Carrer</a></li>
                </nav>

            <div className="button">
                <button id="lightmode" onClick="lightModeFunct()">LightMode</button>
                <button id="darkmode" onClick="DarkModeFunct()">DarkMode</button>
            </div>


        </div>
    </div>



    )

}
    export default NewInlineCssExample;















