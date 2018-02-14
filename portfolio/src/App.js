import React, { Component } from 'react';
import { Nav, NavItem, Row, Col } from 'react-bootstrap';
// import {Formio} from 'react-formio';
import Slider from './Components/Slider';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="home" className="">
        <Nav bsStyle="pills" className="navFixTop">
          <Row className="noPadding">
            <Col xs={3} sm={3} md={3} className="tabs">
              <a href="#home"><NavItem href="#home">Home</NavItem></a>
            </Col>
            <Col xs={3} sm={3} md={3} className="tabs">
              <a href="#about"><NavItem href="#about">About</NavItem></a>
            </Col>
            <Col xs={3} sm={3} md={3} className="tabs">
              <a href="#projects"><NavItem href="#projects">Projects</NavItem></a>
            </Col>
            <Col xs={3} sm={3} md={3} className="tabs">
              <a href="#contact"><NavItem href="#contact">Contact</NavItem></a>
            </Col>
          </Row>
        </Nav>
        <Slider />
        <Row id="intro">
          <Col xs={12} sm={12} md={3} lg={3} className="blurbSpace">
            <div className="blurbIcon">
              <i id="smallTree" className="fa fa-tree" aria-hidden="true"></i>
              <i id="arrowH" className="fa fa-arrows-h" aria-hidden="true"></i>
              <i id="bigTree" className="fa fa-tree" aria-hidden="true"></i>
            </div>
            <h3>Responsive</h3>
            <p className="blurb">I build responsive web apps that are accessable
            across all devices.</p>
          </Col>
          <Col xs={12} sm={12} md={3} lg={3} className="blurbSpace">
            <div className="blurbIcon">
              <i id="user" className="fa fa-user" aria-hidden="true"></i>
              <i id="arrowRight" className="fa fa-arrow-right" aria-hidden="true"></i>
              <i id="users" className="fa fa-users" aria-hidden="true"></i>
            </div>
            <h3>Scalable</h3>
            <p className="blurb">Each web application is designed with scalability
            in mind, allowing your web app to grow with your business.</p>
          </Col>
          <Col xs={12} sm={12} md={3} lg={3} className="blurbSpace">
            <div className="blurbIcon">
              <i id="tech" className="fa fa-code" aria-hidden="true"></i>
            </div>
            <h3>Compatable</h3>
            <p className="blurb">Integrating with trusted technology makes your
            web application more user friendly and increases brand exposure. I
            have a lot of experience integrating technology from companies like
            Google, Slack, SendGrid, Zoom, AirTable and Youtube.</p>
          </Col>
          <Col xs={12} sm={12} md={3} lg={3} className="blurbSpace">
            <div className="blurbIcon">
              <i id="noPuzzles" className="fa fa-puzzle-piece" aria-hidden="true"></i>
            </div>
            <h3>Design</h3>
            <p className="blurb">Do you want your website designed around a specific theme, idea, or wireframe? If so, I am happy to work with you to make your vision come to life. If not, no worries! I will create some mock ups and present you with a few options to choose from.</p>
          </Col>
        </Row>
        <Row className="about" id="about">
          <Col xs={12} sm={12} md={6} lg={6} className="aboutPic">

          </Col>
          <Col xs={12} sm={12} md={6} lg={6} className="bio">
            <h2>About Me</h2>
            <hr />
            <p>Welcome to my portfolio! My name is Evan Allen. I am a full stack
              JavaScript developer with a passion for building and working with API's.
              While I have a preference towards writing slick back-end code using
              Node.js, that doesn't mean I don't also enjoy writing responsive
              front-end code using React/React Native and Redux. Though I specialize
              in the MERN stack, my skills don't end there. I have also dabbled
              in C, Python, and mySQL. When I am not coding, I enjoy hiking,
              mountain biking, playing hockey, and building/riding wakesurf boards.
              <br />
              <br />
              Please feel free to explore my page and check out some of my projects.
              I am constantly updating and adding projects to my portfolio so be sure to
              come back soon and check out my progress!
            </p>
          </Col>
        </Row>
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
