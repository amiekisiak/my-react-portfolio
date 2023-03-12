import { ProjectCard } from "../components/ProjectCard";
import { Container, Row, Tab, Col, Nav, Carousel } from "react-bootstrap";
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
      description: " Simple calendar application that allows a user to save events for each hour of the day",
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
      description: "Timed coding quiz with multiple-choice questions ",
      imgUrl: projImg5,
      githubUrl: "https://github.com/amiekisiak/my-coding-quiz",
      demoUrl: "https://amiekisiak.github.io/my-coding-quiz/",
    },
    {
      title: "tasty-fact",
      description: "This was team project.An app, which allows user to find a recipes from around the world, while learning facts about the country of choice.",
      imgUrl: projImg6,
      githubUrl: "https://github.com/vaselisk999/tasty-facts",
      demoUrl: "https://vaselisk999.github.io/tasty-facts/",
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => 
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>My Projects</h2>
                  <p>Please see my projects below</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={isVisible ? "animate__animated animate__slideInUp" : ""}
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                title={project.title}
                                description={project.description}
                                imgUrl={project.imgUrl}
                                url={project.demoUrl ? project.demoUrl : project.githubUrl}
                                target={project.demoUrl ? "_blank" : ""}
                                githubUrl={project.githubUrl}
                                demoUrl={project.demoUrl}
                              />
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
               Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>

      </section>
    )
  }

  export default Projects;