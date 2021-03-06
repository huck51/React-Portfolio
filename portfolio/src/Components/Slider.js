
import React, {Component} from 'react';
import { Carousel } from 'react-bootstrap';
import '../App.css'

class Slider extends Component {

  render() {
    if (typeof InstallTrigger !== 'undefined') {
      return (
        <div className="carousel-fade container-fluid carousel slide">
          <div className="carousel-inner">
            <div id="test1">
            </div>
            {/*<Image width={900} height={500} alt="900x500" className="carImg" src={fogForest} />*/}
            <Carousel.Caption>
              <div className="slideFourOne">
                <h1 id="evan" className="slideHead">EVAN ALLEN</h1>
                <hr className="spacer"/>
                <h1 className="slideHead">FULL STACK DEVELOPER</h1>
                <p></p>
              </div>
            </Carousel.Caption>
        </div>
      </div>
      );
    } else {
      return (
        <Carousel className="carousel-fade container-fluid">
          <Carousel.Item animateIn animateOut>
            <div id="test1">
            </div>
            {/*<Image width={900} height={500} alt="900x500" className="carImg" src={fogForest} />*/}
            <Carousel.Caption>
              <div className="slideFourOne">
                <h1 id="evan" className="slideHead">EVAN ALLEN</h1>
                <hr className="spacer"/>
                <h1 className="slideHead">FULL STACK DEVELOPER</h1>
                <p></p>
              </div>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item animateIn animateOut>
          <div id="test2">
          </div>
          {/*<Image width={900} height={500} alt="900x500" className="carImg" src={stones} />*/}
          <Carousel.Caption>
            <div className="slideFour">
              <hr className="overUnderBar"/>
              <h1 className="slideHeadTwo">I like to build cool things that have an impact on the world</h1>
              <hr className="overUnderBar"/>
              <p></p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item animateIn animateOut>
          <div id="test3">
          </div>
          {/*<Image width={900} height={500} alt="900x500" className="carImg" src={rockStream} />*/}
          <Carousel.Caption>
            <div className="slideFour">
              <hr className="overUnderBar"/>
              <h1 className="slideHeadThree">I love learning new languages, tools, and technologies!</h1>
              <hr className="overUnderBar"/>
              <p></p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      );
    }
  }
}

export default Slider;
