
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
          <Image width={900} height={500} alt="900x500" className="carImg" src={fogForest} />
          <Carousel.Caption className="slideOne">
            <div className="container-fluid">
              <p>Hi, my name is Evan Allen. Welcome to my portfolio!</p>
            </div>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item animateIn animateOut>
        <Image width={900} height={500} alt="900x500" className="carImg" src={stones} />
        <Carousel.Caption className="slideTwo">
          <p>I build vivid, full stack web apps that scale to meet your growing business needs.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item animateIn animateOut>
        <Image width={900} height={500} alt="900x500" className="carImg" src={rockStream} />
        <Carousel.Caption className="slideThree">
          <p>I release either a new project or new feature to an existing project every week!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
  }
}

export default Slider;
