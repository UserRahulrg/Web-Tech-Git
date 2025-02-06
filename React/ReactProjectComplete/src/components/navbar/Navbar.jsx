import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { SiShopee } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <figure className={styles.logo}>
        <SiShopee />
        <span>Shopee</span>
      </figure>

      <ul className={styles.navLinks}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/signup"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Signup
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
