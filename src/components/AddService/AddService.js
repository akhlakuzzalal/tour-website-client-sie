import React from 'react';
import { useForm } from 'react-hook-form';

const AddService = () => {
   const { register, handleSubmit, reset } = useForm();
   const onSubmit = (data) => {
      fetch('https://frightening-goosebumps-40936.herokuapp.com/tours', {
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
         <h1>Add A Tour Place</h1>
         <form className='d-flex justify-content-center' onSubmit={handleSubmit(onSubmit)}>
            <div className='w-50 border border-success p-3 border-3 rounded'>
               <input className='form-control mb-2 border border-info' {...register('name')} placeholder='Servive Name' />
               <input className='form-control mb-2 border border-info' {...register('Price')} type='number' placeholder='price' />
               <input className='form-control mb-2 border borer-info' {...register('img')} type='url' placeholder='image Url' />
               <textarea className='form-control mb-2 border borer-info' {...register('description')} type='text' placeholder='Describe about the Tour' />
               <input className='btn btn-info' type="submit" />
            </div>
         </form>
      </div>
   );
};

export default AddService;