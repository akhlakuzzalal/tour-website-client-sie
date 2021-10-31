import React from 'react';
import Services from '../../Services/Services';
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
      </div>
   );
};

export default Home;