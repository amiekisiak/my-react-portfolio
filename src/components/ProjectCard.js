import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "../App.css";

export const ProjectCard = ({ title, description, imgUrl, githubUrl, demoUrl }) => {
  return (
    <Col sm={12} md={6} lg={6}>
      <Card className="project-card" id="card">
        <Card.Img variant="top" src={imgUrl} className="project-img" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
      <div className="button-group">
        <Link to={githubUrl} target="_blank" rel="noopener noreferrer">
          <Button variant="success">
            GitHub Repo
          </Button>
        </Link>
        <Link to={demoUrl} target="_blank" rel="noopener noreferrer">
          <Button variant="success">
            Demo
          </Button>
        </Link>
      </div>
    </Col>
  );
};
