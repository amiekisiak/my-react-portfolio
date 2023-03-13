import { ProjectCard } from "../components/ProjectCard";
import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import TrackVisibility from "react-on-screen";
import projImg1 from "../assets/img/img_projImg1.png";
import projImg2 from "../assets/img/img_projImg2.png";
import projImg3 from "../assets/img/img_projImg3.png";
import projImg4 from "../assets/img/img_projImg4.png";
import projImg5 from "../assets/img/img_projImg5.png";
import projImg6 from "../assets/img/img_projImg6.png";

export const Projects = () => {
  const projects = [
    {
      title: "workday-planner",
      description: "App that allows a user to save events for each hour of the day",
      imgUrl: projImg1,
      githubUrl: "https://github.com/amiekisiak/workday-planner",
      demoUrl: "https://amiekisiak.github.io/workday-planner/",
    },
    {
      title: "Bootstrap portfolio",
      description: "Portfolio layout using the Bootstrap CSS Framework",
      imgUrl: projImg2,
      githubUrl: "https://github.com/amiekisiak/Bootstrap-Portfolio",
      demoUrl: "https://amiekisiak.github.io/Bootstrap-Portfolio/",
    },
    {
      title: "my-portfolio",
      description: " Professional portfolio website created using HTML and CSS",
      imgUrl: projImg3,
      githubUrl: "https://github.com/amiekisiak/my-portfolio",
      demoUrl: "https://amiekisiak.github.io/my-portfolio/",
    },
    {
      title: "weather-info",
      description: "Weather dashboard with form inputs",
      imgUrl: projImg4,
      githubUrl: "https://github.com/amiekisiak/weather-info",
      demoUrl: "https://amiekisiak.github.io/weather-info/",
    },
    {
      title: "my-coding-quiz",
      description: "Timed coding quiz with multiple-choice questions with added sounds ",
      imgUrl: projImg5,
      githubUrl: "https://github.com/amiekisiak/my-coding-quiz",
      demoUrl: "https://amiekisiak.github.io/my-coding-quiz/",
    },
    {
      title: "tasty-fact",
      description: "Team project. An app allowing user to find a recipes from around the worldand to learn facts about the country of choice.",
      imgUrl: projImg6,
      githubUrl: "https://github.com/vaselisk999/tasty-facts",
      demoUrl: "https://vaselisk999.github.io/tasty-facts/",
    },
  ];

  const [isPaused, setIsPaused] = useState(false);

  const handleCardClick = () => {
    setIsPaused(true);
  };

  return (
    <section className="project-card" id="project-card">
      <Container>
        <TrackVisibility>
          {({ isVisible }) => (
            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
              <h2>My Projects</h2>
              <p>Please take a look at some of my projects below.</p>
<Row>
{projects.map((project) => (
<Col lg={4} mb={6} key={project.title}>
<ProjectCard
                   title={project.title}
                   description={project.description}
                   imgUrl={project.imgUrl}
                   githubUrl={project.githubUrl}
                   demoUrl={project.demoUrl}
                   handleCardClick={handleCardClick}
                   isPaused={isPaused}
                 />
</Col>
))}
</Row>
</div>
)}
</TrackVisibility>
</Container>
</section>
);
};

export default Projects;
