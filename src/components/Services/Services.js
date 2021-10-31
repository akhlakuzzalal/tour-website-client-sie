import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Tour from './Tour';

const Services = () => {
   const [tours, setTours] = useState([]);

   useEffect(() => {
      fetch('https://frightening-goosebumps-40936.herokuapp.com/tours')
         .then(res => res.json())
         .then(data => setTours(data))
   }, [])
   return (
      tours.length > 0 ?
         <div className='row gx-4 row-cols-lg-4 row-cols-1 m-4'>
            {
               tours.map(tour => <Tour key={tour._id} tour={tour}></Tour>)
            }
         </div>
         :
         <div>
            <Spinner animation="grow" variant="warning" />
         </div>
   );
};

export default Services;