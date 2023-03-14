import React, { useRef } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navbar from './components/NavBar';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';
import Particle from './components/Particle';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import background from './assets/img/background.png';

function App() {
  const nodeRef = useRef(null); // declare nodeRef using the useRef hook
  return (
    <CSSTransition nodeRef={nodeRef} in={true} appear={true} timeout={1000} classNames="fade">
      <div ref={nodeRef} style={{ backgroundImage: `url(${background})` }}>
        <Router>
          <div>
            <Navbar />
            <Banner />
            <Wrapper>
              <Routes>
                <Route path="/" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/skills/*" element={<Skills />} />
                <Route path="/contact/*" element={<Contact />} />
                <Route path="/particle" element={<Particle />} />
              </Routes>
            </Wrapper>
            <Footer />
          </div>
        </Router>
      </div>
    </CSSTransition>
  );
}

export default function AppWrapper() {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

