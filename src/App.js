import React, { useContext } from "react";
import "./styles.css";
import Todos from "./components/todos/Todos";
import { LoginContext } from "./context/LoginContext";
import Login from "./components/login/Login";
import SigInForm from "./components/login/SignInForm";

export default function App() {
  const { isLogged, signInView, createAccView, handleUserLogged } = useContext(
    LoginContext
  );
  return (
    <div className="App">
      {!isLogged && !signInView && !createAccView && <Login />}
      {!isLogged && !createAccView && signInView && <SigInForm />}
      {!isLogged && !signInView && createAccView && <SigInForm />}
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
