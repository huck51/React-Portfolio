import React, { Component } from 'react';
import { Nav, NavItem, Row, Col, Image } from 'react-bootstrap';
import Slider from './Components/Slider';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import profPic from './Images/snipe.png';
import sundown from './Images/sundown.jpg';
import jump from './Images/jump.jpg';
import chairlift from './Images/chairlift.jpg';
import banner from './Images/linkedinbanner.jpeg';
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
          <NavItem href="Projects">Projects</NavItem>
            </Col>
            <Col xs={12} sm={12} md={3} className="tabs">
          <NavItem href="Contact">Contact</NavItem>
            </Col>
          </Row>
        </Nav>
        <Slider />
        <Row className="intro">
          <Col xs={12} sm={12} md={3} lg={3}>
            <p>Each of my designs begins with a blank canvas which allows your content to guide the layout.</p>
          </Col>
          <Col xs={12} sm={12} md={3} lg={3}>
            <p>Each of my designs begins with a blank canvas which allows your content to guide the layout.</p>
          </Col>
          <Col xs={12} sm={12} md={3} lg={3}>
            <p>Each of my designs begins with a blank canvas which allows your content to guide the layout.</p>
          </Col>
          <Col xs={12} sm={12} md={3} lg={3}>
            <p>Each of my designs begins with a blank canvas which allows your content to guide the layout.</p>
          </Col>
        </Row>
        <Row className="about">
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
