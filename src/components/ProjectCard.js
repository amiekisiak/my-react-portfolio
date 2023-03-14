import React, { useState } from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "../App.css";

export const ProjectCard = ({ title, description, imgUrl, githubUrl, demoUrl }) => {
  const [expanded, setExpanded] = useState(false);

  const handleCardClick = () => {
    setExpanded(!expanded);
  }

  return (
    <Col sm={12} mb={6} lg={12}>
      <div className="project-card-wrapper">
        <Card className={`project-card ${expanded ? 'expanded' : ''}`} id="card" onClick={handleCardClick}>
          <Card.Img variant="top" src={imgUrl} className="project-img" />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="button-group">
        <Link to={githubUrl} target="_blank" rel="noopener noreferrer" className="github-link">
          <Button variant="success" className="github-button">
            See it in GitHub
          </Button>
        </Link>
        <Link to={demoUrl} target="_blank" rel="noopener noreferrer" className="demo-link">
          <Button variant="success" className="demo-button">
            See the demo
          </Button>
        </Link>
      </div>
    </Col>
  );
};