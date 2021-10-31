import React from 'react';

const SingleOrder = (props) => {
   const { name, order, stutus, from, address } = props.order;
   const { children } = props;


   return (
      <div className='my-3'>
         <div className='card-style mx-5'>
            <h2>Stuts : <span className={!(stutus === 'Approved') ? 'text-danger' : 'text-success'}>{stutus}</span></h2>
            <div className='row row-cols-lg-3'>
               <div className='text-start'>
                  <ul className='fs-3 fw-bold'>Selected: {Object.keys(order).map(n => <li className='fs-4 fw-bold' key={n}>{n}</li>)}</ul>
               </div>
               <div className='text-start'>
                  <h3>Order From : {from}</h3>
                  <h3>Order By: {name}</h3>
                  <h4>Current Address: {address}</h4>
               </div>
               <div>
                  {children}
               </div>
            </div>
         </div>
      </div>
   );
};

export default SingleOrder;