import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import navIcon1 from '../src/img/icons8-linkedin-circled.svg';
import navIcon2 from '../src/img/icons8-github.svg';



// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
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
              to="/"
              end
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/discover"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/search"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Contact Me
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="social-icon">
                <a href="#"><img src={navIcon1} alt="" /></a>
                <a href="#"><img src={navIcon2} alt="" /></a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span> Connect</span></button>
              </HashLink>
            
    </nav>
  );
}

export default NavBar;