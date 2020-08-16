import React, { createContext, useState } from "react";

export const LoginContext = createContext();

export function LoginProvider(props) {
  const [isLogged, setLogged] = useState(false);
  const [signInView, setSignInView] = useState(false);
  const [createAccView, setCreateAccView] = useState(false);

  //Mock User Data Store
  const [users, setUsers] = useState([
    { username: "admin", password: "admin" }
  ]);

  const handleSignInView = (bool) => {
    setSignInView(bool);
  };
  const handleCreateAccView = (bool) => {
    setCreateAccView(bool);
  };
  const handleUserLogged = (bool) => {
    setLogged(bool);
    if (!bool) {
      setSignInView(bool);
      setCreateAccView(bool);
    }
  };

  const checkUser = (user) => {
    return users.every(({ username, password }) => {
      if (user.username === username && user.password === password) return true;

      return false;
    });
  };

  const addUser = ({ username, password }) => {
    const newUsers = users.concat([{ username, password }]);
    setUsers(newUsers);
    handleUserLogged(true);
  };

  const attr = {
    isLogged,
    handleUserLogged,
    signInView,
    createAccView,
    handleSignInView,
    handleCreateAccView,
    checkUser,
    addUser
  };
  return (
    <LoginContext.Provider value={{ ...attr }}>
      {props.children}
    </LoginContext.Provider>
  );
}
