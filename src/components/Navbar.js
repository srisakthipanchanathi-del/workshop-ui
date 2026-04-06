// Navbar component - handles top navigation and mobile menu
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  // this controls whether mobile menu is open or closed
  const [isOpen, setIsOpen] = useState(false);
  
  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  
  return (
    <nav className="navbar">
      
      {/* logo on the left */}
      <Link to="/" className="logo">
        FOSSEE Workshops
      </Link>
      {/* hamburger button - only shows on mobile */}
      <button
        className="hamburger-btn"
        onClick={toggleMenu}
        aria-label="open menu"
      >
        {isOpen ? "X" : "☰"}
      </button>
      {/* nav links - class changes when menu is open */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
        </li>
        <li>
          <Link
            to="/register"
            className="register-link"
            onClick={() => setIsOpen(false)}
          >
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

