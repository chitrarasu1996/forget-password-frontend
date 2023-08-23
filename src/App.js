import logo from './logo.svg';
import './App.css';
import {Route,Routes} from "react-router-dom"
import Register from './components/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import FogetPassword from  "./components/ForgetPassword.js"
import ResetPassword from './components/ResetPassword';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<Register/>} />
        <Route path="/" element={<Login/>} />
      <Route path='forget-password' element={<FogetPassword/>}/>
      <Route path="/reset-password?" element={<ResetPassword/>}/>
      </Routes>
    </div>
  );
}

export default App;
