import logo from './logo.svg';
import './App.css';
import HomePage from './components/homeLink.jsx';
import { Navbutton } from './components/button.jsx';
import Link from './components/navlinks.jsx';

let links = ['services', 'projects', 'about', 'extra'];

function App() {
  return (
    <div className="navbar">
      <HomePage text="LOGOBAKERY"></HomePage>
      <div className="navlinks">
        {
          links.map(x => (
            <Link text={x}></Link>
          ))
        }
      </div>
      <Navbutton className="navbtn" name="CONTACT"></Navbutton>
    </div>
  );
}

export default App;
