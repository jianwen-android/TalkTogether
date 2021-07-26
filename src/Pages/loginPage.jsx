import "./loginPage.css";
import aurora from './Images/aurora.svg';
import logo from './Images/logo.svg';

export default function LoginPage(){
    return (
        <body>
            <img src={aurora} id='image' alt=''/>
            <div id = 'main'>
                <div id='secondary_container'>
                    <div id="logins_container">
                        <h1 id="title">Login</h1>
                        <input class='input email' placeholder="Email"/>
                        <input class='input password' placeholder='Password'/>
                        <button class='button login'>Login</button>
                    </div>
                    <div id='logo_container'>
                        <img src={logo} id='image' alt=''/>
                    </div>
                </div>
            </div>
        </body>
    );
}

