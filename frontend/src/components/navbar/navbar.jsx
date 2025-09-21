import { Link } from 'react-router-dom';
import { useState } from 'react';
import './navbar.css';

// A function to handle the cart button click
const handleCartClick = () => {
    console.log("Cart button was clicked!");
    // You can add logic here to open a cart modal or sidebar
};

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='nav-elements'>
            <div className='logo'>
            <Link to="/"><button><img src="fevicon.svg" alt="Logo" /></button></Link>
            </div>
            <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                <Link to="/"><button><p>Home</p></button></Link>
                <Link to="/products"><button><p>Products</p></button></Link>
                <Link to="/about"><button><p>About Us</p></button></Link>
                <Link to="/contact"><button><p>Contact</p></button></Link>
            </div>
            <button className='cart-button' onClick={handleCartClick}>
                <img className='cart' src="/cart.svg" alt="Cart" />
            </button>
            <button className='hamburger-menu' onClick={toggleMenu}>
                &#9776;
            </button>
        </div>
    );
    
}

export default Navbar;
