import React from 'react';
import Banner from '../components/Banner';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import navIcon1 from '../assets/img/icons8-linkedin-circled.svg';
import navIcon2 from '../assets/img/icons8-github.svg';
import navIcon3 from '../assets/img/icons8-copy-64.png';
import avatar from '../assets/img/Avatar.svg';
import { useSpring, animated } from 'react-spring';

function About() {
  const fadeProps = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 500 },
  });

  const avatarProps = useSpring({
    to: { transform: 'translateY(0)' },
    from: { transform: 'translateY(-100%)' },
    config: { duration: 1000 },
  });

  const hiThereProps = useSpring({
    to: { opacity: 1, transform: 'translateX(0)' },
    from: { opacity: 0, transform: 'translateX(-100%)' },
    config: { duration: 1000 },
  });

  const textProps = useSpring({
    to: { opacity: 1, transform: 'translateY(0)' },
    from: { opacity: 0, transform: 'translateY(50px)' },
    delay: 1000,
    config: { duration: 1000 },
  });

  const linkProps = useSpring({
    to: { opacity: 1, transform: 'translateY(0)' },
    from: { opacity: 0, transform: 'translateY(50px)' },
    delay: 1000,
    config: { duration: 1000 },
  });

  return (
    <animated.div style={fadeProps}>
      <Banner>
        <animated.div style={avatarProps} className="avatar">
          <img src={avatar} alt="Avatar" />
        </animated.div>
        <div className="title"></div>
        <h1>
          <animated.span style={hiThereProps}>Hi There!</animated.span>
        </h1>
        <h2>I am a front-end web developer</h2>
      </Banner>
      <Container style={{ marginTop: 10 }}>
        <Row>
          <Col size="md-12">
            <animated.h1 style={textProps}>Welcome to my portfolio webpage!</animated.h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12" >
            <animated.p style={textProps}>
              I am a passionate front-end developer who is ready to learn and build the next generation of web applications!
            </animated.p>
            <animated.div style={linkProps}>
              You can connect with me and see my Resume below!
              <div className="social-icon">
                <a href="https://github.com/amiekisiak" target="_blank" rel="noopener noreferrer">
                  <img src={navIcon1} alt="LinkedIn" />
                </a>
                <a href="https://github.com/" target="_blank" rel="noreferrer">
                  <img src={navIcon2} alt="GitHub" />
                </a>
                <a href="#" target="_blank" rel="noreferrer">
                  <img src={navIcon3} alt="Copy link" />
                </a>
              </div>
            </animated.div>
          </Col>
        </Row>
      </Container>
    </animated.div>
  );
}

export default About;
