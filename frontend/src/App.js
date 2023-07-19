import logo from './logo.svg';
import './App.css';
import { Signup } from './component/Signup';
import { Login } from './component/Login';

function App() {
  return (
    <div className="App">
      <Signup />
      <Login />
    </div>
  );
}

export default App;
