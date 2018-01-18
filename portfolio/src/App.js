import React, { Component } from 'react';
import { Nav, NavItem, Row, Col, Image } from 'react-bootstrap';
// import {Formio} from 'react-formio';
import Slider from './Components/Slider';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="bckgrnd">
        <Nav bsStyle="pills" className="navFixTop">
          <Row className="noPadding">
            <Col xs={12} sm={12} md={3} className="tabs">
          <NavItem href="#home">Home</NavItem>
            </Col>
            <Col xs={12} sm={12} md={3} className="tabs">
          <NavItem href="#about">About</NavItem>
            </Col>
            <Col xs={12} sm={12} md={3} className="tabs">
          <NavItem href="#projects">Projects</NavItem>
            </Col>
            <Col xs={12} sm={12} md={3} className="tabs">
          <NavItem href="#contact">Contact</NavItem>
            </Col>
          </Row>
        </Nav>
        <Slider />
        <Row id="intro">
          <Col xs={12} sm={12} md={3} lg={3}>
            <div className="blurbIcon">
              <i id="smallTree" className="fa fa-tree" aria-hidden="true"></i>
              <i id="arrowH" className="fa fa-arrows-h" aria-hidden="true"></i>
              <i id="bigTree" className="fa fa-tree" aria-hidden="true"></i>
            </div>
            <h3>Responsive</h3>
            <p className="blurb">I build responsive web apps that are accessable across all devices.</p>
          </Col>
          <Col xs={12} sm={12} md={3} lg={3}>
            <div className="blurbIcon">
              <i id="user" className="fa fa-user" aria-hidden="true"></i>
              <i id="arrowRight" className="fa fa-arrow-right" aria-hidden="true"></i>
              <i id="users" className="fa fa-users" aria-hidden="true"></i>
            </div>
            <h3>Scalable</h3>
            <p className="blurb">Each web application is designed with scalability in mind, allowing your web app to grow with your business.</p>
          </Col>
          <Col xs={12} sm={12} md={3} lg={3}>
            <div className="blurbIcon">
              <i id="tech" className="fa fa-code" aria-hidden="true"></i>
            </div>
            <h3>Compatable</h3>
            <p className="blurb">Integrating with trusted technology makes your web application more user friendly and increases brand exposure. I have a lot of experience integrating with brands like Google, Slack, Zoom, AirTable and Youtube to name a few.</p>
          </Col>
          <Col xs={12} sm={12} md={3} lg={3}>
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
            <p>Welcome to my portfolio! My name is Evan. I am a fullstack
              developer from Minneapolis. I am currently enrolled at <a href="https://lambdaschool.com/" target="_blank" id="ls">Lambda School </a>
              where I am learning full-stack development using React and React Native.
              We have also spent quite a bit of time at LambdaU exploring some of the deeper
              concepts in computer science like the Traveling Salesman Problem and the
              Dining Philosophers problem. In additon, we have spent time working in C
              and python. When I am not coding, I enjoy hiking, mountain biking, playing
              hockey, and building/riding wakesurf boards.
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
