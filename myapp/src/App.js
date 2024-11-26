import logo from './logo.svg';
import {BrowserRouter as Router,Routes,Route,Link,NavLink} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Contactus from './components/Contactus';
import Aboutus from './components/Aboutus';
function App() {
  return (
    <div className="App">
      
      <Router>
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
        <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/contact' element={<Contactus/>} />
        <Route path='/about' element={<Aboutus/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
