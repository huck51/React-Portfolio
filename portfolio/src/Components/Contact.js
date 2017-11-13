
import React, {Component} from 'react';
import {Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import '../App.css';

class Contact extends Component {

  render() {
    return (
      <div className="contact">
      <h2>Contact</h2>
      <hr />
        <Row>
          <Col md={6}>
            <FormGroup>
              <ControlLabel>Name:</ControlLabel>
              <FormControl type="text" placeholder="Ex: John Doe">
              </FormControl>
            </FormGroup>
            <FormGroup>
              <ControlLabel>Email:</ControlLabel>
              <FormControl type="email" placeholder="Ex: johndoe@company.com">
              </FormControl>
            </FormGroup>
            <FormGroup>
              <ControlLabel>Phone:</ControlLabel>
              <FormControl type="text" placeholder="Ex: ###-###-####">
              </FormControl>
            </FormGroup>
            <FormGroup>
              <ControlLabel>Message:</ControlLabel>
              <FormControl componentClass="textarea" placeholder="Your message here...">
              </FormControl>
            </FormGroup>
          </Col>
          <Col md={6}>
            <Row>
              <Col md={12}>
                <h3>Send me a message!</h3>
                <p>Interested in hiring me? Wanna give me feedback on
                  my portfolio? Just want to say "Hi"? Great! I would
                  love to hear from you! To see more of my work check
                  my GitHub repository below.
                </p>
              </Col>
            </Row>
              <Col md={4}>
                <Button>GitHub</Button>
              </Col>
              <Col md={4}>
                <Button>LinkedIn</Button>
              </Col>
              <Col md={4}>
                <Button>FreeCodeCamp</Button>
              </Col>
            <Row>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Contact;
