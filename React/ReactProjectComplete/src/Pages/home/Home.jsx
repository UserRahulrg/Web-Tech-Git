import React from "react";
import styles from "./Home.module.css";

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <aside className={styles.left}>
        <header>
          <h1>
            Online <br /> Shopping
          </h1>
          <h3>
            Discover a world of endless possibilities. Shop the latest trends,
            exclusive collections, and unbeatable deals—all in one place.
          </h3>
        </header>
        <section className={styles.btnContainer}>
          <button className={styles.btn}>View More</button>
        </section>
      </aside>
      <aside className={styles.right}></aside>
    </div>
  );
};

export default HomePage;
