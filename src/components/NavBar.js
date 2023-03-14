import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <img
          src="https://media.giphy.com/media/l0NwPo4YFfmS6pHCC/giphy.gif"
          alt="Logo"
          style={{ maxWidth: "100px", maxHeight: "60px", width: "auto", height: "auto" }}
        />
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
              My Projects
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
    </nav>
  );
}

export default NavBar;
