import React from 'react';
import { useForm } from 'react-hook-form';

const AddService = () => {
   const { register, handleSubmit, reset } = useForm();
   const onSubmit = (data) => {
      fetch('https://frightening-goosebumps-40936.herokuapp.com/hotels', {
         method: 'POST',
         headers: {
            "content-type": "application/json"
         },
         body: JSON.stringify(data)
      })
         .then(res => res.json())
         .then(data => {
            alert('Data Send Successfully to The database')
         });
      reset();
   };
   return (
      <div className='my-5'>
         <h1>Add a Hotel </h1>
         <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('name')} placeholder='Hotel Name' />
            <input {...register('Price')} type='number' placeholder='price' />
            <input {...register('img')} type='url' placeholder='image Url' />
            <input type="submit" />
         </form>
      </div>
   );
};

export default AddService;