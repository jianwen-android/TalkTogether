import React from "react";
import styles from "./loginPage.module.css";
import aurora from "./Images/aurora.svg";
import logo from "./Images/logo.svg";
import { useHistory } from "react-router";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

export default function LoginPage() {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: "25ch",
    },
  }));

  const history = useHistory();

  let emailInput = React.createRef();
  let passwordInput = React.createRef();

  function clicked() {
    console.log("email: " + emailInput.current.value);
    console.log("password: " + passwordInput.current.value);
    history.push("/class");
  }

  const classes = useStyles();
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <body>
      <img src={aurora} id={styles.image} alt="" />
      <div id={styles.main}>
        <div id={styles.secondary_container}>
          <div id={styles.logins_container}>
            <h1 id={styles.title}>Login</h1>

            <input class={styles.input} ref={emailInput} placeholder="Email" />

            <FormControl
              className={clsx(classes.margin, classes.textField)}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}
              />
            </FormControl>

            <input
              class={styles.input}
              ref={passwordInput}
              placeholder="Password"
              type="password"
            />
            <button onClick={clicked} class={styles.button}>
              Login
            </button>
          </div>
          <div id={styles.logo_container}>
            <img src={logo} id={styles.logo} alt="" />
          </div>
        </div>
      </div>
    </body>
  );
}
