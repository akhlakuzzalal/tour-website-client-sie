import React, { useEffect, useState } from 'react';
import Hotel from './Hotel';

const Hotels = () => {
   const [hotels, setHotels] = useState([]);

   useEffect(() => {
      fetch('https://frightening-goosebumps-40936.herokuapp.com/hotels')
         .then(res => res.json())
         .then(data => setHotels(data))
   }, [])
   return (
      <div className='row gx-4 row-cols-lg-4 row-cols-1 m-4'>
         {
            hotels.map(tour => <Hotel key={tour._id} tour={tour}></Hotel>)
         }
      </div>
   );
};

export default Hotels;