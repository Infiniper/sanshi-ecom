import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css'
import Navbar from './components/navbar/navbar.jsx';
import Footer from './components/footer/footer.jsx';
import Home from './pages/Home/Home.jsx';
import Products from './pages/products/products.jsx';
import About from './pages/About/About.jsx';
import Contact from './pages/contact/Contact.jsx';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App

