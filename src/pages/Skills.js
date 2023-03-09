import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <div className="skills-icons">
        <FontAwesomeIcon icon={faHtml5} title="HTML5" />
        <FontAwesomeIcon icon={faCss3Alt} title="CSS3" />
        <FontAwesomeIcon icon={faJsSquare} title="JavaScript" />
        <FontAwesomeIcon icon={faReact} title="React" />
      </div>
    </div>
  );
};

export default Skills;

