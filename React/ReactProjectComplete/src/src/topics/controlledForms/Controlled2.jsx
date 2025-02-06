import React, { useState } from "react";

const Controlled2 = () => {
  let [signupUser, setSignupUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  console.log(signupUser);

  let { username, email, password } = signupUser;

  let handleChange = (x) => {
    // console.log(x);
    let { name, value } = x.target;
    // console.log({[name]:value});
    setSignupUser({ ...signupUser, [name]: value });
  };

  let formSubmit = (e) => {
    e.preventDefault();
    console.log(signupUser);
    setSignupUser({ username: "", email: "", password: "" });
  };

  return (
    <div>
      <form onSubmit={formSubmit}>
        <label htmlFor="">Name</label>
        <input
          type="text"
          placeholder="Enter Name"
          value={username}
          onChange={handleChange}
          name="username"
        />
        <br />
        <br />
        <label htmlFor="">Email</label>
        <input
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={handleChange}
          name="email"
        />
        <br />
        <br />
        <label htmlFor="">Password</label>
        <input
          type="text"
          placeholder="Enter Password"
          value={password}
          onChange={handleChange}
          name="password"
        />
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Controlled2;
