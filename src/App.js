import React, { useContext } from "react";
import "./styles.css";
import Todos from "./components/todos/Todos";
import { LoginContext } from "./context/LoginContext";
import Login from "./components/login/Login";
import SignInForm from "./components/login/SignInForm";
import CreateAccForm from "./components/login/CreateAccForm";

export default function App() {
  const { isLogged, signInView, createAccView, handleUserLogged } = useContext(
    LoginContext
  );
  return (
    <div className="App">
      {!isLogged && !signInView && !createAccView && <Login />}
      {!isLogged && !createAccView && signInView && <SignInForm />}
      {!isLogged && !signInView && createAccView && <CreateAccForm />}
      {isLogged && (
        <>
          <div>
            <button onClick={() => handleUserLogged(false)}>Sign Off</button>
          </div>
          <Todos />
        </>
      )}
    </div>
  );
}
