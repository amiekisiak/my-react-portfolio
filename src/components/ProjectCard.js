import React from "react";
import "../App.css";
import { Col } from "react-bootstrap";
export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={2}>
      <div className="proj-card">
        <img src={imgUrl} />
        <div className="proj-card-text">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}