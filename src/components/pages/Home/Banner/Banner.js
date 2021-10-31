import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
   return (
      <div>
         <Carousel>
            <Carousel.Item>
               <img
                  className="d-block w-100"
                  src="https://i.ibb.co/RSGWL5V/Tours-and-Travel.jpg"
                  alt="First slide"
               />
            </Carousel.Item>
            <Carousel.Item>
               <img
                  className="d-block w-100"
                  src="https://i.ibb.co/3M6vKrt/unnamed.jpg"
                  alt="Second slide"
               />
            </Carousel.Item>
            <Carousel.Item>
               <img
                  className="d-block w-100"
                  src="https://i.ibb.co/XxmzcK7/1.jpg"
                  alt="Third slide"
               />
            </Carousel.Item>
         </Carousel>
      </div>
   );
};

export default Banner;