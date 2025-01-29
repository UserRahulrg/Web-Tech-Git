// import styles from "./components/Navbar/Navbar.module.css"
import { Link } from "react-router-dom";
import styles from "./Navbar.jsx"

const Navbar =()=>{

    return(
        <div>
            <nav id={styles.id}>
                <figure>logo</figure>

                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/login">Login</a>
                    </li>
                    <li>
                        <a href="/signin">SignUp</a>
                    </li>
                    <li>
                        <Link to="/signins"></Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;
