import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import useCart from '../../Hooks/useCart';

const Order = (props) => {
   const [show, setShow] = useState(false);
   const { deleteDB } = useCart()
   const { img, name, Price } = props.order;

   const handleClose = () => setShow(false);

   const handleRemove = (name) => {
      deleteDB(name)
      setShow(false)
   }
   const deleteOrder = name => {
      setShow(true);
   }
   return (
      <div className='mb-4'>
         <div className='row row-cols-lg-3 row-cols-1 m-0 py-3 card-style'>
            <div>
               <img height='150px' width='300px' src={img} alt="" />
            </div>
            <div>
               <h1>{name}</h1>
               <h4>Cost: {Price}</h4>
            </div>
            <div>
               <button onClick={() => deleteOrder(name)} className='btn btn-danger'>Remove</button>
            </div>
         </div>
         <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
               <Modal.Title className='text-success'>Confirm For Delete <span className='text-info'>{name}</span> </Modal.Title>
            </Modal.Header>
            <Modal.Body className='text-danger'>Do You want to Delete This From Your Cart!</Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={handleClose}>
                  Close
               </Button>
               <Button variant="primary" onClick={() => handleRemove(name)}>
                  Remove
               </Button>
            </Modal.Footer>
         </Modal>
      </div>
   );
};

export default Order;