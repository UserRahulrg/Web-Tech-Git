import styles from "./myntranav.module.css"

const MyntraNav = ()=>{

    // console.log(styles);

    return(
        
        <div id={styles.div}>

            <nav id={styles.nav}>
                <h4 id = {styles.h4}>Myntra</h4>
                <ul id={styles.ul}>
                    <li type="none"><a href="" id={styles.li}>MEN</a></li>
                    <li type="none"><a href="">WOMEN</a></li>
                    <li type="none"><a href="">KIDS</a></li>
                    <li type="none"><a href="">HOME & LIVING</a></li>
                    <li type="none"><a href="">BEAUTY</a></li>
                    <li type="none"><a href="">STUDIO</a></li>
                </ul>
            </nav>
            
        </div>
    )
}
export default MyntraNav;