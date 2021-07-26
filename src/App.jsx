import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginPage from "./Pages/loginPage/loginPage";
import Classes from "./Pages/classes";

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <LoginPage />
          </Route>
          <Route path="/login" exact>
            <LoginPage />
          </Route>
          <Route path="/class" exact>
            <Classes />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
