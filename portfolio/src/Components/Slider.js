
import React, {Component} from 'react';
import {Carousel, Image} from 'react-bootstrap';
import fogForest from '../Images/nature-forest-trees-fog.jpeg';
import stones from '../Images/stackofstones.jpeg';
import rockStream from '../Images/rockStream.jpg';
import '../App.css'

class Slider extends Component {

  render() {
    return (
      <Carousel className="carousel-fade">
        <Carousel.Item animateIn animateOut>
          <Image width={900} height={500} alt="900x500" className="carImg" src={fogForest} />
          <Carousel.Caption className="slideOne">
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item animateIn animateOut>
        <Image width={900} height={500} alt="900x500" className="carImg" src={stones} />
        <Carousel.Caption className="slideTwo">
          <p>I specialize in making stacks on, stacks on, stacks.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item animateIn animateOut>
        <Image width={900} height={500} alt="900x500" className="carImg" src={rockStream} />
        <Carousel.Caption className="slideThree">
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
  }
}

export default Slider;
