import React, { Component } from 'react';
import { Nav, NavItem, Row, Col, Image } from 'react-bootstrap';
import Slider from './Components/Slider';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import profPic from './Images/snipe.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="bckgrnd">
        <Nav bsStyle="pills" className="navFixTop">
          <Row>
            <Col md={3} className="tabs">
          <NavItem href="#home">Home</NavItem>
            </Col>
            <Col md={3} className="tabs">
          <NavItem href="#about">About</NavItem>
            </Col>
            <Col md={3} className="tabs">
          <NavItem href="Projects">Projects</NavItem>
            </Col>
            <Col md={3} className="tabs">
          <NavItem href="Contact">Contact</NavItem>
            </Col>
          </Row>
        </Nav>
        <Slider />
        <Row>
          <Col md={5} className="bridge">
            <h2>Evan Allen</h2>
          </Col>
          <Col md={2} className="bridge">
            <Image src={profPic} className="proPic" responsive circle />
          </Col>
          <Col md={5} className="bridge">
            <h2>Evan Allen</h2>
          </Col>
        </Row>
        <Row className="about">
          <Col md={12}>
            <h2>About</h2>
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
