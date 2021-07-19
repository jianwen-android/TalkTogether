import styles from "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignInPage from "./Pages/signIn";

export default function App() {
  return (
    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://i1.sndcdn.com/artworks-RC6kOoicWfqBmolF-KmlnFQ-t500x500.jpg"
          target="_blank"
          rel="noopener noreferrer"
        >
          irman can go kiss me
        </a>
      </header>
    </div>
  );
  */
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">SignInPage</Link>
            </li>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <SignInPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2 className={styles.home}>Home Pages</h2>;
}

function About() {
  return <h2 className={styles.home}>About</h2>;
}

function Users() {
  return <h2 className={styles.home}>Users</h2>;
}
