import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faReact,faBootstrap,faNode, faFigma, } from '@fortawesome/free-brands-svg-icons';
import "../App.css"; // import the CSS file with animation styles

const Skills = () => {
  const [animate, setAnimate] = useState(false); // state to trigger animation
  
  useEffect(() => {
    // set the state to trigger animation after a short delay
    const timeout = setTimeout(() => setAnimate(true), 500);
    return () => clearTimeout(timeout);
  }, []);
  
  return (
    <div className={`skills ${animate ? "animate" : ""}`}>
      <h2>Skills</h2>
      <div className="skills-icons">
        <FontAwesomeIcon icon={faHtml5} title="HTML5" />
        <FontAwesomeIcon icon={faCss3Alt} title="CSS3" />
        <FontAwesomeIcon icon={faJsSquare} title="JavaScript" />
        <FontAwesomeIcon icon={faReact} title="React" />
        <FontAwesomeIcon icon={faBootstrap} title="Bootstrap" />
        <FontAwesomeIcon icon={faNode} title="Node" />
        <FontAwesomeIcon icon={faFigma} title="Figma" />
      </div>
    </div>
  );
};

export default Skills;
