import React, { useEffect, useState } from 'react';
import Bus from './Bus';

const Buses = () => {
   const [buses, setBuses] = useState([]);

   useEffect(() => {
      fetch('https://frightening-goosebumps-40936.herokuapp.com/buses')
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