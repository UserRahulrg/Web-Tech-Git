import styles from "./Home.module.css"
import {  useNavigate } from "react-router-dom"
const Home =()=>{

    let varUseNavigate = useNavigate()

    function SingUpButton(){

        varUseNavigate("/signUp")
    }

    function LogInButton(){

        varUseNavigate("/logIn")
    }

    return(
    <div id={styles.mainDiv}>
        <div className="styles.centerDivClass" id={styles.centerDivId}>
            <h2>Welcome to Home Page</h2>
            <div className="centerDivButtons">
                <button id={styles.centerDivButton} onClick={SingUpButton}>SignUp</button>
                <button id={styles.centerDivButton} onClick={LogInButton}>LogIn</button>
            </div>
        </div>
    </div>
    )
}

export default Home;