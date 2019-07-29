import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Carousel.css'
import c1 from './1.jpg'
import c2 from './2.jpg'
import c3 from './3.jpg'

class ControlledCarousel extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        index: 0,
        direction: null,
      };
    }
  
    handleSelect(selectedIndex, e) {
      this.setState({
        index: selectedIndex,
        direction: e.direction,
      });
    }
  
    render() {
      const { index, direction } = this.state;
  
      return (
        <div className="carousel">
    
        
        <Carousel 
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
          prevLabel=""
          nextLabel=""
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={c1}
              alt="First slide"
              width="100%"
            />
            <Carousel.Caption>
              <h2 className="ch">Liberal Arts Education in Yangon</h2>
              <Link to="./liberal-arts" className="aa">What is liberal arts?</Link>
              
            </Carousel.Caption>
          </Carousel.Item>

          
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={c2}
              alt="Third slide"
              width="100%"
            />
            <Carousel.Caption>
              <h2 className="ch">Meet our Alumni</h2>
              <Link to="./alumni" className="aa">What are they doing now?</Link>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={c3}
              alt="Third slide"
              width="100%"
            />
            <Carousel.Caption className="carousel-caption">
              <h2 className="ch">Academic Calendar</h2>
              <Link to="./calendar" className="aa"> Check when you can apply!</Link>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
      );
    }
  }
  
 export default ControlledCarousel

