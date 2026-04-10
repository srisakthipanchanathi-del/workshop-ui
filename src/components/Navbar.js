// Navbar component - handles top navigation and mobile menu
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
// controls whether mobile menu is open or closed
const [isOpen, setIsOpen] = useState(false);

// toggles menu state
function toggleMenu() {
setIsOpen(!isOpen);
}

// closes menu when a link is clicked
function closeMenu() {
setIsOpen(false);
}

return ( <nav className="navbar">


  {/* logo */}
  <NavLink to="/" className="logo" onClick={closeMenu}>
    FOSSEE Workshops
  </NavLink>

  {/* hamburger button (mobile only) */}
  <button
    className="hamburger-btn"
    onClick={toggleMenu}
    aria-label="Toggle menu"
  >
    <span className="menu-icon">
      {isOpen ? "✕" : "☰"}
    </span>
  </button>

  {/* navigation links */}
  <ul className={`nav-links ${isOpen ? "open" : ""}`}>
    <li>
      <NavLink to="/" onClick={closeMenu}>
        Home
      </NavLink>
    </li>

    <li>
      <NavLink to="/login" onClick={closeMenu}>
        Login
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/register"
        className="register-link primary-btn"
        onClick={closeMenu}
      >
        Register
      </NavLink>
    </li>
  </ul>
</nav>


);
}

export default Navbar;


