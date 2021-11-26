import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LoginPage from "./Pages/loginPage/loginPage";
import Classes from "./Pages/classPage/classPage";
import Topics from "./Pages/topicPage/topicPage";
import Readings from "./Pages/readingPage/readingPage";
import SignUp from "./Pages/SignUpPage/SignUp"

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
          <Route path="/topic" exact>
            <Topics />
          </Route>
          <Route path="/read" exact>
            <Readings />
          </Route>
          <Route path="/signup" exact>
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
