import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import { BrowserRouter as Router, NavLink } from "react-router-dom";

import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  const handleActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <Container>
          <NavLink exact to="/" className="navbar-brand">
            <img src={logo} alt="Logo" />
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" onSelect={handleActiveLink}>
              <NavLink exact to="/#home" className={`navbar-link ${activeLink === 'home' ? 'active' : ''}`}>Home</NavLink>
              <NavLink exact to="/#skills" className={`navbar-link ${activeLink === 'skills' ? 'active' : ''}`}>Skills</NavLink>
              <NavLink exact to="/#projects" className={`navbar-link ${activeLink === 'projects' ? 'active' : ''}`}>Projects</NavLink>
            </Nav>
            <div className="navbar-social">
              <a href="#"><img src={navIcon1} alt="" /></a>
              <a href="#"><img src={navIcon2} alt="" /></a>
              <a href="#"><img src={navIcon3} alt="" /></a>
            </div>
            <HashLink to='/#connect'>
              <button className="navbar-btn">Let’s Connect</button>
            </HashLink>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
}

export default NavBar;
