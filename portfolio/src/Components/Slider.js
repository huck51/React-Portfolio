
import React, {Component} from 'react';
import {Carousel, Image} from 'react-bootstrap';
import fogForest from '../Images/nature-forest-trees-fog.jpeg';
import stones from '../Images/stackofstones.jpeg';
import rockStream from '../Images/rockStream.jpg';
import '../App.css'

class Slider extends Component {

  render() {
    return (
      <Carousel className="carousel-fade container-fluid">
        <Carousel.Item animateIn animateOut>
          <div id="test1">
            <div className="opac">
            </div>
          </div>
          {/*<Image width={900} height={500} alt="900x500" className="carImg" src={fogForest} />*/}
          <Carousel.Caption className="slideOne jumbotron">
            <div className="container-fluid">
              <h1 className="slideHead">EVAN ALLEN</h1>
              <hr className="spacer"/>
              <h1 className="slideHead">FULL STACK DEVELOPER</h1>
              <p></p>
            </div>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item animateIn animateOut>
        <div id="test2">
          <div className="opac">
          </div>
        </div>
        {/*<Image width={900} height={500} alt="900x500" className="carImg" src={stones} />*/}
        <Carousel.Caption className="slideTwo jumbotron">
          <div className="container-fluid">
            <h1 className="slideHead">I like to build cool things that have an impact on the world</h1>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item animateIn animateOut>
        <div id="test3">
          <div className="opac">
          </div>
        </div>
        {/*<Image width={900} height={500} alt="900x500" className="carImg" src={rockStream} />*/}
        <Carousel.Caption className="slideThree jumbotron">
          <div className="container-fluid">
            <h1 className="slideHead">I love learning new languages, tools, and technologies!</h1>
            <p></p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
  }
}

export default Slider;
