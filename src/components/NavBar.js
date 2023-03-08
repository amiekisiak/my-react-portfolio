import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import navIcon1 from '../assets/img/icons8-linkedin-circled.svg';
import navIcon2 from '../assets/img/icons8-github.svg';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        My Portfolio
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              exact
              to="/"
              activeClassName="active"
              className="nav-link"
            >
              Hello
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/projects"
              activeClassName="active"
              className="nav-link"
            >
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contact"
              activeClassName="active"
              className="nav-link"
            >
              Contact Me
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="social-icon">
        <a href="https://www.linkedin.com/in/amiekisiak/">
          <img src={navIcon1} alt="LinkedIn" />
        </a>
        <a href="https://github.com/amiekisiak">
          <img src={navIcon2} alt="GitHub" />
        </a>
      </div>
      <HashLink to="#connect">
        <button className="vvd">
          <span>Connect</span>
        </button>
      </HashLink>
    </nav>
  );
}

export default NavBar;
