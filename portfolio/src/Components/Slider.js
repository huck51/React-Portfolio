
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
            <p>Don't let your website fade into the mist.</p>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item animateIn animateOut>
        <Image width={900} height={500} alt="900x500" className="carImg" src={stones} />
        <Carousel.Caption className="slideTwo">
          <p>Vivid web apps that scale to meet your growing business needs.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item animateIn animateOut>
        <Image width={900} height={500} alt="900x500" className="carImg" src={rockStream} />
        <Carousel.Caption className="slideThree">
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
  }
}

export default Slider;
