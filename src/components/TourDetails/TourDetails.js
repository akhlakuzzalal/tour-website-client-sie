import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const TourDetails = () => {
   const [details, setDetails] = useState({})
   const { id } = useParams();

   const { img, name, description } = details

   console.log(id)
   useEffect(() => {
      fetch(`https://frightening-goosebumps-40936.herokuapp.com/details/${id}`)
         .then(res => res.json())
         .then(data => setDetails(data))
   }, [])

   return (
      <div>
         <div className='card-style m-4'>
            <h1 className='bg-info text-light py-2 text-center'>Details For {name}</h1>
            <div className='w-75 mx-auto py-4'>
               <div className='row row-cols-lg-2 row-cols-1 align-items-center custom p-2'>
                  <div className='col'>
                     <img width='100%' src={img} alt="" />
                  </div>
                  <div className='col'>
                     <h2>{name}</h2>
                     <p>{description}</p>
                     <Link to='/home' className='btn btn-info'>Go Back to Home</Link></div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default TourDetails;