import React, { useState, useRef, useEffect } from "react";
import _ from "lodash";

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
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

export default function LoginForm() {
  const [userCred, setUSerCredentials] = useState({
    username: "",
    email: "",
    password: ""
  });
  const [errorEmail, setErrorEmail] = useState({
    isErrorEmail: false,
    error: ""
  });
  const [errorPass, setErrorPass] = useState({
    isErrorPass: false,
    error: ""
  });
  const verifyPass = useRef("");

  const hanldeEmailError = (email) => {
    if (email) {
      if (emailRegex.test(email)) {
        setErrorEmail({
          isErrorEmail: false,
          error: ""
        });
      } else {
        setErrorEmail({
          isErrorEmail: true,
          error: "Incorrect Email format"
        });
      }
    }
  };
  const debounceEmailError = React.useCallback(
    _.debounce((email) => hanldeEmailError(email), 500, {
      leading: false,
      trailing: true
    }),
    []
  );
  useEffect(() => {
    debounceEmailError(userCred.email);
  }, [userCred.email, debounceEmailError]);

  const handleInput = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setUSerCredentials((state) => ({
      ...state,
      [name]: value
    }));
  };

  const hanldeSubmit = (e) => {
    e.preventDefault();
    //compare passwords
    if (checkPass()) {
      console.log("Submit user", userCred);
      setErrorPass({
        isErrorPass: false,
        error: ""
      });
      setUSerCredentials({ username: "", email: "", password: "" });
      verifyPass.current.value = "";
    } else {
      setErrorPass({
        isErrorPass: true,
        error: "Passwords DO NOT match. Please, verify it"
      });
    }
  };

  function checkPass() {
    const pass = userCred.password;
    const vPass = verifyPass.current.value;
    if (pass && vPass) {
      return pass === vPass;
    }

    return false;
  }

  return (
    <>
      <div>Login Form</div>
      <form style={styles.form} onSubmit={hanldeSubmit}>
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
          <label>Email: </label>
          <input
            name="email"
            type="email"
            value={userCred.email}
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
        <div style={styles.row}>
          <label>Verify Password: </label>
          <input name="vpass" type="password" ref={verifyPass} required />
        </div>
        {errorEmail.isErrorEmail && <div>{errorEmail.error}</div>}
        {errorPass.isErrorPass && <div>{errorPass.error}</div>}
        <div style={styles.btnContainer}>
          <button type="submit">Create Account</button>
        </div>
      </form>
    </>
  );
}
