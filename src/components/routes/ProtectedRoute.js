import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { LoginContext } from "../../context/LoginContext";

export default function ProtectedRoute({ children, ...rest }) {
  const { isLogged } = useContext(LoginContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        console.log(props) || isLogged ? (
          children
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
}
