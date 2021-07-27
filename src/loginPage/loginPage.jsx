import React from "react";
import "./loginPage.css";
//import aurora from "./Images/aurora.svg";
//import logo from "./Images/logo.svg";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { BsFillEyeFill } from "react-icons/bs";
//import { BsFillEyeSlashFill } from "react-icons/bs";

const Login = () => (
  <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>

    <Button>
      <BsFillEyeFill />
    </Button>
  </Form>
);

export default Login;

// export default function LoginPage() {
//   const history = useHistory();

//   let emailInput = React.createRef();
//   let passwordInput = React.createRef();

//   function clicked() {
//     console.log("email: " + emailInput.current.value);
//     console.log("password: " + passwordInput.current.value);
//     history.push("/class");
//   }

//   return (
//     <body>
//       <img src={aurora} id="image" alt="" />
//       <div id="main">
//         <div id="secondary_container">
//           <div id="logins_container">
//             <h1 id="title">Login</h1>

//             <input class="input email" ref={emailInput} placeholder="Email" />

//             <label
//               class="input password"
//               ref={passwordInput}
//               placeholder="Password"
//             />
//             <button onClick={clicked} class="button login">
//               Login
//             </button>
//           </div>
//           <div id="logo_container">
//             <img src={logo} id="logo" alt="" />
//           </div>
//         </div>
//       </div>
//     </body>
//   );
// }
