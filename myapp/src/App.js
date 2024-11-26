import logo from './logo.svg';
import {BrowserRouter as Router,Routes,Route,Link,NavLink} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Contactus from './components/Contactus';
import Aboutus from './components/Aboutus';
import DAshboard from './components/Dashboard';
import Login from './components/Login';
function App() {
  return (
    <div className="App">
      
      {/*<Router>
        { <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav> }
        <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/contact' element={<Contactus/>} />
        <Route path='/about' element={<Aboutus/>} />
        </Routes>
        </Router>*/}
        <Router>
          <Routes>
            <Route path='/dashboard' element={<DAshboard/>} />
            <Route path='/' element={<Login/>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
