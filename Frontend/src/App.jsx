import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Category from './pages/Catagory'; 
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './pages/NavBar';
import Signup from './pages/Signup';
import Footer from './pages/Footer';

function App() {
  return (
    <Router>
      <NavBar />
      <div style={{ paddingTop: '120px' }}> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/category" element={<Category />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;