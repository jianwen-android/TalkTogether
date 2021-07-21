import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./home";
import { useHistory } from 'react-router-dom';

export default function SignInPage(){

    handleClick = () => {
        const history = useHistory();
        console.log('Click happened');
        history.push('/home');
    }

    return (
        <div>
            <h1> Sign In/Up Page Here</h1>
            <button onClick={this.handleClick}> Go To Home </button>

            <Switch>
                <Route path="/home">
                <Home />
                </Route>
            </Switch>
        </div>
    );
}
