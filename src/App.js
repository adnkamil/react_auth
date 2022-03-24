import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './component/Home';
import Nav from './component/Navbar/Nav';
import Cart from './component/Cart';

function App() {
  return (
    <>
      <Router>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<Cart/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
