import React, { useEffect, useState } from 'react';
import Bus from './Bus';

const Buses = () => {
   const [buses, setBuses] = useState([]);

   useEffect(() => {
      fetch('http://localhost:5000/buses')
         .then(res => res.json())
         .then(data => {
            setBuses(data);
         });
   }, [])

   return (
      <div>
         <h1>Public Transport</h1>
         {
            buses.map(bus => <Bus key={bus._id} bus={bus}></Bus>)
         }
      </div>
   );
};

export default Buses;