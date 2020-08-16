import React from "react";
import "./styles.css";
import Todos from "./components/todos/Todos";
import Login from "./components/login/Login";
import SignInForm from "./components/login/SignInForm";
import CreateAccForm from "./components/login/CreateAccForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./components/routes/ProtectedRoute";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={SignInForm} />
          <Route path="/newAccount" component={CreateAccForm} />
          <ProtectedRoute path="/todos">
            <Todos />
          </ProtectedRoute>
        </Switch>
      </div>
    </Router>
  );
}
