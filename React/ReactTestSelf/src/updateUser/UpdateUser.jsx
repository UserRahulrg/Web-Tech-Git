import axios from "axios";
import { useState } from "react";

const UpdateUser = () => {
  const [usernameEmail, setUsernameEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const [multipleStates,setMultipleStates] = useState({

    usernameEmail:"",
    password:"",
    newUsername:"",
    newEmail:"",
    newPassword:"",
    message:""
  })


  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      let { data } = await axios.get("http://localhost:3000/userData");
      let userToUpdate = data.find((user) => {
        return (
          (user.username === usernameEmail || user.email === usernameEmail) &&
          user.password === password
        );
      });
      if (userToUpdate) {
        const updatedUser = {
          ...userToUpdate,
          username: newUsername || userToUpdate.username,
          email: newEmail || userToUpdate.email,
          password: newPassword || userToUpdate.password,
        };
        await axios.put(`http://localhost:3000/userData/${userToUpdate.id}`, updatedUser);
        alert("User updated successfully!");
      } else {
        alert("User not found!");
      }
    } catch (error) {
      alert("Error updating user!");
    }
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "usernameEmail") {
      setUsernameEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "newUsername") {
      setNewUsername(value);
    } else if (name === "newEmail") {
      setNewEmail(value);
    } else if (name === "newPassword") {
      setNewPassword(value);
    }
  };

  return (
    <div>
      <h2>Update User</h2>
      <div className="form">
        <form onSubmit={formSubmit}>
          <label htmlFor="">Username/Email </label>
          <input
            type="text"
            name="usernameEmail"
            value={usernameEmail}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="">New Username</label>
          <input
            type="text"
            name="newUsername"
            value={newUsername}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="">New Email</label>
          <input
            type="text"
            name="newEmail"
            value={newEmail}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="">New Password</label>
          <input
            type="password"
            name="newPassword"
            value={newPassword}
            onChange={handleChange}
          />
          <br />
          <br />
          <button>Update User</button>
        </form>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default UpdateUser;