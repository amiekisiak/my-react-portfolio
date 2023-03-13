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
import Particle from './components/Particle'; //importing the Particle component
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import background from './assets/img/background-pic.jpg';

function App() {
  return (
    <CSSTransition in={true} appear={true} timeout={1000} classNames="fade">
      <div style={{ backgroundImage: `url(${background})` }}>
        
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
                <Route path="/particle" element={<Particle />} /> {/* adding the Particle route */}
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
