import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import useCart from '../../Hooks/useCart';

const Shidule = () => {
   const [order, setOrder] = useState(false);
   const { user } = useAuth();
   const { getSavedCart } = useCart()
   const { register, handleSubmit, reset } = useForm();

   const onSubmit = data => {
      const orderItem = getSavedCart()
      data.order = orderItem;
      data.stutus = 'pending'
      data.email = user.email;

      fetch('https://frightening-goosebumps-40936.herokuapp.com/orders', {
         method: "PUT",
         headers: {
            "content-type": "application/json"
         },
         body: JSON.stringify(data)
      })
         .then(res => res.json())
         .then(data => {
            console.log(data)
            setOrder(true)
            alert('Succefully Placed Order Wait for Approval')
         })
      reset();
   }

   const handleUpdate = () => {
      setOrder(false);
   }
   console.log(order)
   return (
      <div className=' d-flex justify-content-center'>
         {
            !order ? <div className='m-5 w-50'>
               <h1>Please fill the form correctly</h1>
               <form onSubmit={handleSubmit(onSubmit)}>
                  <div className='border border-warning mb-2 border-3 rounded-pill p-4'>
                     <h4>Name</h4>
                     <input required className='form-control mb-2 border border-info' {...register('name')} value={user.displayName} />
                  </div>
                  <div className='border border-warning mb-2 border-3 rounded-pill p-4'>
                     <h4>From Where You want to go?</h4>
                     <input required className='form-control mb-2 border border-info' {...register('from')} placeholder='From Where' />
                  </div>
                  <div className='border border-warning mb-2 border-3 rounded-pill p-4'>
                     <h4>Phone Number</h4>
                     <input required className='form-control mb-2 border border-info' {...register('phone')} type='number' placeholder='+8801XXXXXXXXX' />
                  </div>
                  <div className='border border-warning mb-2 border-3 rounded-pill p-4'>
                     <h4>Current Address</h4>
                     <input className='form-control mb-2 border border-info' {...register('address')} type='text' placeholder='Address' />
                  </div>
                  <input type="submit" value='Confirm' className='mb-2 border border-info btn btn-info' />
               </form>
            </div>
               :
               <div className='my-4'>
                  <h1>You are Already Submit The Tour.</h1>
                  <button onClick={handleUpdate} className='btn btn-info'>Update Information</button>
               </div>
         }
      </div>
   );
};

export default Shidule;