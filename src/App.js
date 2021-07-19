import logo from './logo.svg';
import './App.css';
import { NavigationContainer } from '@react-navigation/native';
import SignInPage from './Pages/signIn';

function App() {
/*

  return (
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
          irman can go kms
        </a>
      </header>
    </div>
  );
*/
    return <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="signIn" component={SignInPage} />
      </Stack.Navigator>
    </NavigationContainer>
}

export default App;
