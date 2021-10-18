import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import './Header.css'

const Header = () => {
  const {user,logOut}=useAuth();
    return (
        <>
        <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg">
    <Container>
    <Navbar.Brand className="text-color" href="#home">Panacea Care</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end ">
    <Nav.Link className="text-color" as={HashLink} to="/home#home">Home</Nav.Link>
      <Nav.Link className="text-color" as={HashLink} to="/home#services">Services</Nav.Link>
      <Nav.Link className="text-color" as={HashLink} to="/home#doctors">Our Doctor</Nav.Link>
      {user?.email ? 
      <Button onClick={logOut} variant="light">Log Out</Button>
      :
      <Nav.Link className="text-color" as={Link} to="/login">Login</Nav.Link>

      }
      <Navbar.Text>
         <a href="#login">{user?.displayName}</a>
      </Navbar.Text>
    </Navbar.Collapse>
    </Container>
  </Navbar>
            
        </>
    );
};

export default Header;