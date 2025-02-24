import axios from "axios";
import { useState } from "react";

const DeleteUser = () => {
  const [usernameEmail, setUsernameEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      let { data } = await axios.get("http://localhost:3000/userData");
      let userToDelete = data.find((user) => {
        return (
          (user.username === usernameEmail || user.email === usernameEmail) &&
          user.password === password
        );
      });
      if (userToDelete) {
        await axios.delete(`http://localhost:3000/userData/${userToDelete.id}`);
        setMessage("User deleted successfully!");
      } else {
        setMessage("User not found!");
      }
    } catch (error) {
      setMessage("Error deleting user!");
    }
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "usernameEmail") {
      setUsernameEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <div>
      <h2>Delete User</h2>
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
          <button>Delete User</button>
        </form>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default DeleteUser;