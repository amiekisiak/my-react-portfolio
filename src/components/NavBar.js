import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import navIcon1 from '../assets/img/icons8-linkedin-circled.svg';
import navIcon2 from '../assets/img/icons8-github.svg';
import navIcon3 from '../assets/img/icons8-note-64png';


function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <img src="" alt="" />
        Ale
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to ="/" activeclassname="active" className="nav-link">
              Hello
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/projects"
              activeclassname="active"
              className="nav-link"
            >
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/skills"
              activeclassname="active"
              className="nav-link"
            >
              Skills
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contact"
              activeclassname="active"
              className="nav-link"
            >
              Contact Me
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="social-icon">
        <a href="https://www.linkedin.com/in/aleksandra-m-ab9a4111a/" target="_blank" rel="noopener noreferrer">
          <img src={navIcon1} alt="LinkedIn" />
        </a>
        <a href="https://github.com/amiekisiak" target="_blank" rel="noopener noreferrer">
          <img src={navIcon2} alt="GitHub" />
        </a>
        <a href="https://github.com/amiekisiak" target="_blank" rel="noopener noreferrer">
          <img src={navIcon2} alt="Resume" />
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
