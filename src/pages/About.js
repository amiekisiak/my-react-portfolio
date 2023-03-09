import React from "react";
import Banner from "../components/Banner";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import "../App.css";


function About() {
  return (
    <div>
          <Banner BackgroundImage="">
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet diam tortor, id
              consequat mauris ullamcorper eu. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Pellentesque et dui id justo finibus
              sollicitudin at et metus. Ut feugiat tellus nec metus commodo, sed suscipit nisi
           </p>
            
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
