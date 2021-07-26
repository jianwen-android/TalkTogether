import "./loginPage.css";
import React from "react";
import aurora from "./Images/aurora.svg";
import logo from "./Images/logo.svg";
import { useHistory } from "react-router";

export default function LoginPage() {
  const history = useHistory();

  let emailInput = React.createRef();
  let passwordInput = React.createRef();

  function clicked() {
    console.log("email: " + emailInput.current.value);
    console.log("password: " + passwordInput.current.value);
    history.push("/class");
  }

  return (
    <body>
      <img src={aurora} id="image" alt="" />
      <div id="main">
        <div id="secondary_container">
          <div id="logins_container">
            <h1 id="title">Login</h1>
            <input class="input email" ref={emailInput} placeholder="Email" />
            <input
              class="input password"
              ref={"*".repeat(str.length)}
              placeholder="Password"
            />
            <button onClick={clicked} class="button login">
              Login
            </button>
          </div>
          <div id="logo_container">
            <img src={logo} id="logo" alt="" />
          </div>
        </div>
      </div>
    </body>
  );
}
