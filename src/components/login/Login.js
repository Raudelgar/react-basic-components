import React, { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";

export default function Login() {
  const { handleSignInView, handleCreateAccView } = useContext(LoginContext);
  return (
    <div>
      <button onClick={handleSignInView}>Sign In</button>{" "}
      <button onClick={handleCreateAccView}>Create Account</button>
    </div>
  );
}
