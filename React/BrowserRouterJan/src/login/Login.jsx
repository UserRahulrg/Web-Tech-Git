import React, { useState, useEffect } from "react";
import styles from "./Login.module.css";
import axios from "axios";
// import AllProducts from "../allproducts/AllProducts";
import { Navigate, useNavigate } from "react-router-dom";
// import { redirect } from "react-router-dom";
// import { redirect } from "react-router-dom";

const Login = () => {

  
    let useNavigateVar = useNavigate();
    
  
  
  const [loginuser, setLoginuser] = useState({
    email: "",
    password: "",
  });
  const [allusers, setAllusers] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginuser({ ...loginuser, [name]: value });
  };

  async function getSignupUsers() {
    let { data } = await axios.get("http://localhost:3000/users");
    console.log(data); //[{},{},{}]
    setAllusers(data);
  }

  useEffect(() => {
    getSignupUsers();
  }, []);

  const formSubmit = (e) => {
    e.preventDefault();
    console.log(loginuser);

    let authUser = allusers.find((user) => {
      return (
        user.email === loginuser.email && user.password === loginuser.password
      );
    });

    if (authUser) {
      console.log("login successful");
      alert("logged In!!")
      useNavigateVar('/allProducts')

    } else {
      console.log("Please signup");
      alert("NotRegistered!!")
      useNavigateVar("/signUp")
    }
  };



  return (
    <div className={styles.loginContainer}>
      <form onSubmit={formSubmit} className={styles.loginForm}>
        <h2>Welcome Back</h2>
        <p>Login to continue shopping for fun!</p>
        <div className={styles.formGroup}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            value={loginuser.email}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            value={loginuser.password}
            onChange={handleChange}
          />
        </div>
        <div className={styles.btnGroup}>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
