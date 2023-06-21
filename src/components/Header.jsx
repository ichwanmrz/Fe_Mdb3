import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Outlet} from "react-router-dom";
import { Nav, Navbar, Container, NavDropdown, Button } from 'react-bootstrap';

const Header = () => {
  //logic
  return (
  <div>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" id="name"><strong><u className='ms-5'>IchwanMrz</u></strong></Navbar.Brand>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="">Home</Nav.Link>
            <NavDropdown title="Features" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Link 1</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Link 2</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Link 3</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Company" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Link 1</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Link 2</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Link 3</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/careers">Careers</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
           
          </Nav>
          <Nav className="justify-content-end gap-3">
            <Button as={Link} to="/login" variant='outline-light'>Login</Button>
            <Button as={Link} to="/register" variant="outline-light">Register</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet/>
  </div>
  )
}

export default Header