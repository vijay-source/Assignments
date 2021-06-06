import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import '../App.css';
function ControlledCarousel() {


 
  return (
    <Carousel fade >
  <Carousel.Item className="slider">
    <img
      className="d-block w-100 slider"
      src="https://i.pinimg.com/564x/ff/7d/1c/ff7d1c80eeb3ffbc9bbab792efbdd573.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      {/* <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="slider">
    <img
      className="d-block w-100 slider"
      src="https://i.pinimg.com/564x/ce/4b/26/ce4b26769ca3c4b19f107d90250a29db.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      {/* <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="slider">
    <img
      className="d-block w-100 slider"
      src="https://i.pinimg.com/236x/ec/46/18/ec4618758c77926352712c01d7e7855e.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      {/* <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
);
}

export default ControlledCarousel;