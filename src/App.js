import React from 'react';
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

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import background from './assets/img/background-pic.jpg';

function App() {
  return (
    <CSSTransition in={true} appear={true} timeout={1000} classNames="fade">
      <div style={{ backgroundImage: `url(${background})` }}>
        Hi
        <Router>
          <div>
            <Navbar/>
            <Banner/>
      
            <Wrapper>
              <Routes>
                <Route path="/" element={<About/>} />
                <Route path="/projects" element={<Projects/>} />
                <Route path="/skills/*" element={<Skills />} />
                <Route path="/contact/*" element={<Contact />} />
              </Routes>
            </Wrapper>

            {/* <Projects /> */}
            {/* <Contact/> */}
            <Footer />
          </div>
        </Router>
      </div>
    </CSSTransition>
  );
}

export default App;
