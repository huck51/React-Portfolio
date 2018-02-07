
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
          </div>
          {/*<Image width={900} height={500} alt="900x500" className="carImg" src={fogForest} />*/}
          <Carousel.Caption className="slideOne">
            <div className="container-fluid">
              <h1>Hi, Im Evan.</h1>
              <p>Part hockey fan. Part outdoorsman. Full Stack Developer.</p>
            </div>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item animateIn animateOut>
        <div id="test2">
        </div>
        {/*<Image width={900} height={500} alt="900x500" className="carImg" src={stones} />*/}
        <Carousel.Caption className="slideTwo">
          <div className="container-fluid">
            <p>I like to build cool things that have an impact on the world</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item animateIn animateOut>
        <div id="test3">
        </div>
        {/*<Image width={900} height={500} alt="900x500" className="carImg" src={rockStream} />*/}
        <Carousel.Caption className="slideThree">
          <div className="container-fluid">
            <h1>I soak up knowledge like a sponge.</h1>
            <p>I love learning new languages, tools, and technologies!</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
  }
}

export default Slider;
