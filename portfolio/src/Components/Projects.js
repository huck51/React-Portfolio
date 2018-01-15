
import React, { Component } from 'react';
import {Image, Row, Col, Thumbnail } from 'react-bootstrap';
import jsPiano from '../Images/jspiano.png';
import campground from '../Images/CG.png';
import bricks from '../Images/bricks.jpeg';
import arc_hive from '../Images/arc_hive1.jpg';
import '../App.css';

class Projects extends Component {

  render() {
    return (
      <div>
        <h2>Projects</h2>
        <hr />
        <Row>
          <Col xs={12} sm={12} md={6}>
            <Thumbnail
              src={jsPiano}
              href="https://huck51.github.io/Greenfield-Piano/"
              target="_blank"
              className=""
              responsive="true">
                <hr />
                <h4>JavaScript Piano</h4>
                <p>Description</p>
            </Thumbnail>
          </Col>
          <Col xs={12} sm={12} md={6}>
            <Thumbnail
              src={campground}
              href="https://webdevbootcamp-huck51.c9users.io/campgrounds"
              target="_blank"
              className=""
              responsive="true">
                <hr />
                <h4>Campfire Stories</h4>
                <p>Description</p>
            </Thumbnail>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={6}>
            <Thumbnail
              src={arc_hive}
              href="https://github.com/cs1Capstone/arc_hive"
              target="_blank"
              className=""
              responsive="true">
                <hr />
                <h4>Arc_Hive</h4>
                <p>Description</p>
            </Thumbnail>
          </Col>
          <Col xs={12} sm={12} md={6}>
            <Thumbnail
              src={bricks}
              href="#"
              className="proBox"
              responsive="true">
                <hr />
                <h4>Coming Soon!</h4>
                <p>Description</p>
            </Thumbnail>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Projects;
