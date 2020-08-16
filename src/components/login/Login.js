import React, { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";
import { Link } from "react-router-dom";

export default function Login() {
  // const { handleSignInView, handleCreateAccView } = useContext(LoginContext);
  return (
    <div>
      <Link to="/login">
        <button>Sign In</button>
      </Link>{" "}
      <Link to="/newAccount">
        <button>Create Account</button>
      </Link>
    </div>
  );
}

/*
<button onClick={handleSignInView}>Sign In</button>{" "}
      <button onClick={handleCreateAccView}>Create Account</button>
*/
