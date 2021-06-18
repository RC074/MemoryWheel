import axios from "axios";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import classes from "./Login.module.css";

const Login = ({ updateUsername }) => {
  const [name, setName] = useState("");
  let history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();

    if (name.length >= 3) {
      axios
        .post("https://ancient-lowlands-88829.herokuapp.com/users/add", {
          username: name,
        })
        .then((res) => {
          updateUsername(name);
          history.push("/");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className={classes.container}>
      <form onSubmit={onSubmit}>
        <div>
          <input
            className={classes.input}
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <button className={classes.button} type="submit">
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
