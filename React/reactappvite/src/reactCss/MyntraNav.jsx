import styles from "./myntranav.module.css"

const MyntraNav = ()=>{

    return(
        
        <div id={styles.div}>

            <nav id={styles.nav}>
                <h4 id = {styles.h4}>Myntra</h4>
                <ul id={styles.ul}>
                    <li type="none" id={styles.li}><a href="/pages/Men.jsx" >MEN</a></li>
                    <li type="none" id={styles.li}><a href="/pages/Women.jsx">WOMEN</a></li>
                    <li type="none" id={styles.li}><a href="#">KIDS</a></li>
                    <li type="none" id={styles.li}><a href="#">HOME & LIVING</a></li>
                    <li type="none" id={styles.li}><a href="#">BEAUTY</a></li>
                    <li type="none" id={styles.li}><a href="#">STUDIO</a></li>
                    
                </ul>
                <h4 id = {styles.h4}>Cart</h4>
            </nav>
            
        </div>
    )
}
export default MyntraNav;