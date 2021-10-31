import React from 'react';

const Bus = (props) => {
   const { name, ticket, img, From, to } = props.bus
   return (
      <div className='m-3'>
         <div className='row row-cols-lg-3 row-cols-1 m-0 py-3 card-style'>
            <div>
               <img height='150px' width='300px' src={img} alt="" />
            </div>
            <div>
               <h1>{name}</h1>
               <h4>Cost: {ticket}</h4>
               <h5>From: {From} To: {to}</h5>
            </div>
            <div>
               <button className='btn btn-info'>Book A Sit</button>
            </div>
         </div>
      </div>
   );
};

export default Bus;