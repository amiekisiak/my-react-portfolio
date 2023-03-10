import React from "react";
import Banner from "../components/Banner";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import "../App.css";
import navIcon1 from '../assets/img/icons8-linkedin-circled.svg';
import navIcon2 from '../assets/img/icons8-github.svg';
import navIcon3 from '../assets/img/icons8-copy-64.png';
import profPhoto from '../assets/img/Me.png';

function About() {
  return (
    <div>
         
         <Banner>
          <div className ="prof-photo">
         <img src={profPhoto} alt="Me"></img></div>
        <h1>My name is Aleksandra</h1>
        <h2>I am a front-end web developer</h2>
      </Banner>
      <Container style={{ marginTop: 10 }}>
        <Row>
          <Col size="md-12">
            <h1>Hi There!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              Welcome to my portofolio webpage!
              I am a passionate front-end developer who is ready to learn 
              and build the next generation of web applications!"
           </p>
           <a>You can see my Resume below and connet with me!</a>
           <div className="social-icon">
            
        <a href="https://www.linkedin.com/in/aleksandra-m-ab9a4111a/" target="_blank" rel="noopener noreferrer">
          <img src={navIcon1} alt="LinkedIn" />
        </a> 
        <a href="https://github.com/amiekisiak" target="_blank" rel="noopener noreferrer">
          <img src={navIcon2} alt="GitHub" />
        </a>
        <a href="https://drive.google.com/file/d/1Ou3cNbFlaDmeAjj8MrXeYtAtDF14vfap/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <img src={navIcon3} alt="Resume" />
        </a>
      </div>
            
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
