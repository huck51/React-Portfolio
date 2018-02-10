
import React, { Component } from 'react';
import { Row, Col, Thumbnail } from 'react-bootstrap';
import jsPiano from '../Images/jspiano.png';
import campground from '../Images/CampfireStories.png';
import bricks from '../Images/bricks.jpeg';
import arc_hive from '../Images/arc_hive1.jpg';
import '../App.css';

class Projects extends Component {

  render() {
    return (
      <div className="projects" id="projects">
        <h2 className="projectHeader">Projects</h2>
        <hr className="projectHeader"/>
        <Row>
          <Col xs={12} sm={12} md={6}>
            <Thumbnail
              src={jsPiano}
              href="https://huck51.github.io/Greenfield-Piano/"
              target="_blank"
              rel="noopener noreferrer"
              className="thumb"
              responsive="true">
                <hr className="thumbnailHr"/>
                <h4>JavaScript Piano</h4>
                <input type="checkbox" class="read-more-state" id="post-1" />
                <label for="post-1" class="read-more-trigger"></label>
                <p id="description" class="read-more-wrap"><span class="read-more-target">A piano keyboard created using JavaScript and the Howler.js
                library. The piano is played using the computer keyboard. When
                a key is pressed the note is played and the corresponding key
                lights up.</span></p>
            </Thumbnail>
          </Col>
          <Col xs={12} sm={12} md={6}>
            <Thumbnail
              src={campground}
              href="https://campfire-stories.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className=""
              responsive="true">
                <hr className="thumbnailHr"/>
                <h4>Campfire Stories</h4>
                <input type="checkbox" class="read-more-state" id="post-2" />
                <label for="post-2" class="read-more-trigger"></label>
                <p class="read-more-wrap"><span class="read-more-target">Campfire Stories is a review site dedicated to reviewing
                campgrounds, hiking trails, and national parks. It is inspired
                by Yelp and built using Node.js, Express.js, MongoDB, and
                Embedded JavaScript. Additionally, Campfire Stories uses
                Passport.js to authorize users.</span></p>
            </Thumbnail>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={6}>
            <Thumbnail
              src={arc_hive}
              href="https://github.com/cs1Capstone/arc_hive"
              target="_blank"
              rel="noopener noreferrer"
              className=""
              responsive="true">
                <hr className="thumbnailHr"/>
                <h4>Arc_Hive</h4>
                <input type="checkbox" class="read-more-state" id="post-3" />
                <label for="post-3" class="read-more-trigger"></label>
                <p class="read-more-wrap"><span class="read-more-target">Arc_Hive is an educational tool intended for use at Lambda
                  School that automates the instructors lengthy process of
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
                  Google/YouTube API,  and the AirTable API.</span></p>
            </Thumbnail>
          </Col>
          <Col xs={12} sm={12} md={6}>
            <Thumbnail
              src={bricks}
              href="#projects"
              className=""
              responsive="true">
                <hr className="thumbnailHr"/>
                <h4>Wander Outdoor Mobile App - Coming Soon!</h4>
                <input type="checkbox" class="read-more-state" id="post-4" />
                <label for="post-4" class="read-more-trigger"></label>
                <p class="read-more-wrap"><span class="read-more-target">Check back soon!</span></p>
            </Thumbnail>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Projects;
