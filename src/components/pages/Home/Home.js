import React from 'react';
import Services from '../../Services/Services';
import Buses from '../Buses/Buses';
import Hotels from '../Hotels/Hotels';
import Banner from './Banner/Banner';

const Home = () => {
   return (
      <div>
         <Banner></Banner>
         <h1 className='py-3 bg-info text-light'>Attractive Tours</h1>
         <Services></Services>
         <h1 className='py-3 bg-info text-light'>Book Hotel</h1>
         <Hotels></Hotels>
         <h1 className='py-3 bg-info text-light'>Moving Services</h1>
         <Buses></Buses>
      </div>
   );
};

export default Home;