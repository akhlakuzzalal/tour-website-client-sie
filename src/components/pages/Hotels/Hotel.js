import React from 'react';

const Hotel = (props) => {
   const { name, Price, img } = props.tour
   return (
      <div>
         <div className='col card-style py-3'>
            <div>
               <img height='200px' width='300px' src={img} alt="" />
            </div>
            <div>
               <h3>{name}</h3>
               <h5>Tour Cost: {Price}</h5>
               <button className="btn btn-info">Book Room</button>
            </div>
         </div>
      </div>
   );
};

export default Hotel;