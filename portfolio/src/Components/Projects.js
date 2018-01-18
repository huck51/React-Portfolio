
import React, { Component } from 'react';
import { Row, Col, Thumbnail } from 'react-bootstrap';
import jsPiano from '../Images/jspiano.png';
import campground from '../Images/CG.png';
import bricks from '../Images/bricks.jpeg';
import arc_hive from '../Images/arc_hive1.jpg';
import '../App.css';

class Projects extends Component {

  render() {
    return (
      <div className="projects">
        <h2 className="projectHeader">Projects</h2>
        <hr className="projectHeader"/>
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
                <p>A piano keyboard created using JavaScript and the Howler.js
                library. The piano is played using the computer keyboard. When
                a key is pressed the note is played and the corresponding key
                lights up.</p>
            </Thumbnail>
          </Col>
          <Col xs={12} sm={12} md={6}>
            <Thumbnail
              src={campground}
              href="https://campfire-stories.herokuapp.com/"
              target="_blank"
              className=""
              responsive="true">
                <hr />
                <h4>Campfire Stories</h4>
                <p>Campfire Stories is a review site dedicated to reviewing
                campgrounds, hiking trails, and national parks. It is inspired
                by Yelp and built using Node.js, Express.js, MongoDB, and
                Embedded JavaScript. Additionally, Campfire Stories uses
                Passport.js to authorize users.</p>
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
                <p>Arc_Hive is an educational tool intended for use at Lambda
                  School that automates the instructor's lengthy process of
                  creating a Zoom lecture, sharing the access link in Slack,
                  converting the recorded video file type, uploading the video
                  to YouTube, sharing the YouTube link with students in Slack,
                  and entering the link and corresponding lecture information
                  into AirTable. We automated this process by creating a Slack
                  app and server which allows the instructor to use a slash
                  command in Slack to enter all the metadata for the lecture
                  (title, tags, class, ect.) from there our server takes over
                  and automates the entire process listed above, leaving the
                  teacher free to focus on doing what they do best, teaching.
                  This tool also includes a Slack command for students which
                  allows them to query AirTable using content tags and class
                  names. The titles and links of all lectures matching the
                  search parameters are then returned to the student in Slack
                  via a direct message.  Arc_Hive was built using Node.js and
                  Express.js. It utilizes the Slack API, Zoom API,
                  Google/YouTube API,  and the AirTable API.</p>
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
