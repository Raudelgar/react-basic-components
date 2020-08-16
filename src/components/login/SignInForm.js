import React, { useState, useContext } from "react";
import { LoginContext } from "../../context/LoginContext";
import { Link, Redirect } from "react-router-dom";

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    justiifyContent: "center",
    alignItems: "flex-start",
    marginTop: "30px",
    width: "100%",
    heigth: "auto",
    padding: "10px"
  },
  row: {
    margin: "10px 0"
  },
  btnContainer: {
    with: "100%",
    margin: "0 auto"
  }
};

export default function SigInForm() {
  const { isLogged, checkUser, handleUserLogged } = useContext(LoginContext);
  const [userCred, setUSerCredentials] = useState({
    username: "",
    password: ""
  });
  const [errorUSer, setErrorUser] = useState({
    isError: false,
    error: ""
  });

  const handleInput = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setUSerCredentials((state) => ({
      ...state,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit user", userCred);
    if (checkUser(userCred)) {
      setErrorUser({
        isError: false,
        error: ""
      });
      handleUserLogged(true);
    } else {
      setErrorUser({
        isError: true,
        error: "You are not recognized. Please, create a new account"
      });
    }
    setUSerCredentials({ username: "", email: "", password: "" });
  };

  return (
    <>
      <div>Enter your User and Password</div>
      <form style={styles.form} onSubmit={handleSubmit}>
        <div style={styles.row}>
          <label>Username: </label>
          <input
            name="username"
            type="text"
            value={userCred.username}
            onChange={handleInput}
            required
          />
        </div>
        <div style={styles.row}>
          <label>Password: </label>
          <input
            name="password"
            type="password"
            value={userCred.password}
            onChange={handleInput}
            required
          />
        </div>
        <div style={styles.btnContainer}>
          <button type="submit">Sign In</button>
        </div>
      </form>
      {errorUSer.isError && (
        <>
          <p>{errorUSer.error}</p>
          <Link to="/newAccount">
            <button>Create Account</button>
          </Link>
        </>
      )}
      {isLogged && (
        <Redirect
          to={{ pathname: "/todos", search: `?${userCred.username}` }}
        />
      )}
    </>
  );
}
