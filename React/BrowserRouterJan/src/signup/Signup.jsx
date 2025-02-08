import React, { useState } from "react";
import styles from "./Signup.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {

  let useNavigateVar = useNavigate();

  const [signupuser, setSignupuser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupuser({ ...signupuser, [name]: value });
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    console.log(signupuser);
    try {
      let resp = await axios.post("http://localhost:3000/users", signupuser);
      console.log(resp);
      console.log("data sent successfully");
      setSignupuser({ username: "", email: "", password: "" }); // clear inputs
      alert("User Registered!!")
      useNavigateVar("/logIn")
      
    } catch (error) {
      console.log(error);
      console.log("error while sending data");
      alert("Not Registered!!")
      useNavigateVar("/signUp")
    }
  };

  return (
    <div className={styles.signupContainer}>
      <form onSubmit={formSubmit} className={styles.signupForm}>
        <h2>Create Your Account</h2>
        <p>Join us and start shopping for fun!</p>
        <div className={styles.formGroup}>
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter username"
            name="username"
            value={signupuser.username}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            value={signupuser.email}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            value={signupuser.password}
            onChange={handleChange}
          />
        </div>
        <div className={styles.btnGroup}>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
