import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
   const { SignInWithGoogle, user, logOut } = useAuth()



   return (
      <div>
         <Navbar bg="info" expand="lg">
            <Container fluid>
               <Navbar.Brand className="fs-4 fw-bold">Tour E Jai Dure</Navbar.Brand>
               <Navbar.Toggle aria-controls="navbarScroll" />
               <Navbar.Collapse id="navbarScroll">
                  <Nav
                     className="me-auto my-2 my-lg-0"
                     style={{ maxHeight: '100px' }}
                     navbarScroll
                  >
                     <Nav.Link className='fw-bold' as={Link} to='/home'>Home</Nav.Link>
                     <Nav.Link className='fw-bold' as={Link} to='/services'>Service</Nav.Link>
                     <Nav.Link className='fw-bold' as={Link} to='/orders'>Orders</Nav.Link>
                     <NavDropdown title="Controls" id="navbarScrollingDropdown">
                        <NavDropdown.Item as={Link} to='addService'>Add Service</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to='addHotel'>Add Hotel</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={Link} to='/order/control'>
                           Order Control
                        </NavDropdown.Item>
                     </NavDropdown>
                  </Nav>{
                     !user.email ?
                        <div>
                           <Button variant="success" onClick={SignInWithGoogle}>Log In</Button>
                        </div>
                        :
                        <div className='d-flex align-items-center justify-content-center'>
                           <h5 className='me-4'>{user.displayName}</h5>
                           <Button variant="success" onClick={logOut}>Log Out</Button>
                        </div>
                  }

               </Navbar.Collapse>
            </Container>
         </Navbar>
      </div>
   );
};

export default Header;