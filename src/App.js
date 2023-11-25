import './App.css';
import Home from './components/Home/Home';
import Main from './components/MainPage/Main';
import Navbar1 from './components/NavbarC/Navbar1';
// import Navbar1 from './components/Navbar/Navbar1';
// import Navbar from './components/Navbar/Navbar'
// import Navbar from './components/Navbar/Navbar.js';

//import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function App() {
  return (
    <>
    <div className='App'>
    <Navbar1/>
    <Home/>
    <Main/>
    </div>
   
    </>
  );
}

export default App;
