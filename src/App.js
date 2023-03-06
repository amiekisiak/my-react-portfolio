import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import background from './assets/img/gradienta-QWutu2BRpOs-unsplash.jpg';

function App() {
  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      Hi
      <Router>
        <div>
          <Navbar />
          <Wrapper>
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Wrapper>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
