
import React, { Component } from 'react';
import {Image, Row, Col, Thumbnail } from 'react-bootstrap';
import jsPiano from '../Images/jspiano.png';
import campground from '../Images/CG.png';
import bricks from '../Images/bricks.jpeg';
import '../App.css';

class Projects extends Component {

  render() {
    return (
      <div>
        <h2>Projects</h2>
        <Row>
          <Col md={6}>
            <Thumbnail src={jsPiano} href="https://huck51.github.io/Greenfield-Piano/" target="_blank">
            </Thumbnail>
          </Col>
          <Col md={6}>
            <Thumbnail src={campground} href="https://webdevbootcamp-huck51.c9users.io/campgrounds" target="_blank">
            </Thumbnail>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Thumbnail src={bricks} href="#">
            </Thumbnail>
          </Col>
          <Col md={6}>
            <Thumbnail src={bricks} href="#">
            </Thumbnail>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Projects;
