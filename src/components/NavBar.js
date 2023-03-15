import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logoImg from '../assets/img/AM-gif3.gif';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <img
          src={logoImg}
          alt="Logo"
          style={{ maxWidth: "100px", maxHeight: "80px", width: "auto", height: "auto" }}
        />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleNavbar}
        aria-expanded={isOpen ? "true" : "false"}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/" activeclassname="active" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/projects" activeclassname="active" className="nav-link">
              My Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/skills" activeclassname="active" className="nav-link">
              Skills
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" activeclassname="active" className="nav-link">
              Contact Me
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
