
import React, { Component } from 'react';
// import { Formio } from 'react-formio';
import { Row, Col, Button } from 'react-bootstrap';
import '../App.css';

class Contact extends Component {

  render() {
    return (
      <div className="contact" id="contact">
        <h2>Contact</h2>
        <hr />
        <Row>
          <Col xs={12} sm={12} md={6}>
            <div id="formio"></div>
          </Col>
          <Col md={6}>
            <Row>
              <Col md={12}>
                <h3>Send me a message!</h3>
                <p>" 'I don't know who you are. I don't know what you want. If you
                are looking for a full stack developer, I am available for hire.
                I have a very particular set of skills. Skills that I have acquired
                over a very long career. Skills that make me the perfect candidate
                for people like you. If you hire me now that will be the end of it.
                But if you don't, I will look for you, I will apply at your company,
                and I will do amazing work for you.'</p>
                <p><a className="taken" href="https://www.youtube.com/watch?v=jZOywn1qArI" target="_blank" rel="noopener noreferrer">-Liam Neeson, 2008</a> "</p>
                <p>-Evan Allen (paraphrasing)</p>
                {/*<p id="buttonRowSpacer">Interested in hiring me? Wanna give me feedback on
                  my portfolio? Suggest a project or feature to be built for my
                  weekly Feature Friday release? Just want to say "Hi"? Great! I would
                  love to hear from you! To see more of my work check
                  my GitHub repository below.
                </p>*/}
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={12} md={6} lg={3} className="noPadding">
                  <Button className="contactButtons resume"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://resume.creddle.io/resume/7cix8cvqexc"
                  ><i className="fa fa-file-text-o" aria-hidden="true"></i> Resume</Button>
              </Col>
              <Col xs={12} sm={12} md={6} lg={3} className="noPadding">
                  <Button className="contactButtons gitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/huck51"
                  ><i className="fa fa-github" aria-hidden="true"></i> GitHub</Button>
              </Col>
              <Col xs={12} sm={12} md={6} lg={3} className="noPadding">
                  <Button className="contactButtons linkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/evan-allen-1b533864/"
                  ><i className="fa fa-linkedin-square" aria-hidden="true"></i> LinkedIn</Button>
              </Col>
              <Col xs={12} sm={12} md={6} lg={3} className="noPadding">
                  <Button className="contactButtons fcc"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.freecodecamp.org/huck51"
                  ><i className="fa fa-free-code-camp" aria-hidden="true"></i> FreeCodeCamp</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Contact;
