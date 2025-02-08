import styles from "./AboutUs.module.css"
import style from "./Responsive.module.css"

const AboutUs = () =>{

    // const container = {
    //     // define your container styles or properties here
    //   };


    return(
        <div className={styles.container}>
            <div className={`${styles.responsiveContainerBlock} ${styles.bigContainer}`} >
  <div className={`${styles.responsiveContainerBlock} ${styles.Container}`}>
    <div className={`${styles.responsiveContainerBlock} ${styles.leftSide}`}>
      <p className={`${styles.textBlk} ${styles.heading}`}>
        Meet Our Creative Team
      </p>
      <p className={`${styles.textBlk} ${styles.subHeading}`}>
        Tech World is an online website platform that delivers resources for Individual, Advertising  
      </p>
    </div>
    <div className={`${styles.responsiveContainerBlock} ${styles.rightSide}`}>
    <div className={`${styles.image1And2Div}`}>
        <img className={`${styles.number1img}`} ></img>
       
      </div>
 </div>
  </div>
</div>
        </div>
    )
}

export default AboutUs;