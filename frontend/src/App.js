import logo from './logo.svg';
import './App.css';
import { Signup } from './component/Signup';
import { Login } from './component/Login';
import { Navbar } from './component/Navbar';
import { AllRoutes } from './component/allRoutes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
