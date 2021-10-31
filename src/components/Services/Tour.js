import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import './tour.css';

const Tour = (props) => {
   const { setCart } = useCart();
   const { name, Price, img, _id } = props.tour;
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);

   const handlePurches = () => {
      setShow(true);
   };

   const handleAddCart = name => {
      setCart(name)
      setShow(false)
   };



   return (
      <div className='mt-3'>
         <div className='col card-style py-3'>
            <div>
               <img height='200px' width='300px' src={img} alt="" />
            </div>
            <div>
               <h3>{name}</h3>
               <h5>Tour Cost: {Price}</h5>
               <button onClick={handlePurches} className="btn btn-info me-2">Purches Tour</button>
               <Link className='btn btn-success' to={`details/${_id}`}>Details</Link>
            </div>
         </div>
         <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
               <Modal.Title className='text-success'>{name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>Do You want to Add This In Your Cart!</Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={handleClose}>
                  Close
               </Button>
               <Button variant="primary" onClick={() => handleAddCart(name)}>
                  Add Cart
               </Button>
            </Modal.Footer>
         </Modal>
      </div>
   )
};

export default Tour;