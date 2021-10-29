import React from 'react';
import './Navs.css'
import logo from '../../image/logo.jpg'
import { Button,Container ,Navbar,NavDropdown,Nav,Form, FormControl,Stack} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navs = () => {
    return (
 
             <Navbar className="bar" expand="lg" sticky="top"   > 
    
  <Container>

     <Navbar.Brand   href="#home">
       <img className="logo" src={logo} alt="" />
     </Navbar.Brand>
     <Navbar.Toggle aria-controls="basic-navbar-nav" />
     <Navbar.Collapse id="basic-navbar-nav">
     <Nav className="me-auto ms-auto my-3 links " >
        <Nav.Link href="#home" className="properties text-white " >
         <Link to ="/" className="text-decoration-none text-white">
          Home
          </Link>
          </Nav.Link>
        <Nav.Link href="#link" className="properties text-white text-decoration-none">About</Nav.Link>
        <NavDropdown className="properties text-white" title="Services" id="basic-nav-dropdown">
        
          <NavDropdown.Item  className="my-2 " style={{ fontWeight:"bold", fontSize:"20px"}}>
          <Link to ="/washing" className="text-decoration-none">
            Washing Machine
            </Link>
            </NavDropdown.Item>

         
          <NavDropdown.Item href="#action/3.2" className="my-2 " style={{ fontWeight:"bold", fontSize:"20px"}}>
          <Link to ="/plumbing" className="text-decoration-none">
            Plumbing
            </Link>
            </NavDropdown.Item>
  
         
          <NavDropdown.Item href="#emergency" className="my-2 " style={{ fontWeight:"bold", fontSize:"20px"}}>
          <Link to ="/emergency" className="text-decoration-none">
            Emergency Plumbing
            </Link>
            </NavDropdown.Item>
        
          <NavDropdown.Item href="#action/3.3" className="my-2 " style={{ fontWeight:"bold", fontSize:"20px"}}>
          <Link to ="/water" className="text-decoration-none">
            Water Plumbing <br />Restolation
            </Link>
            </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3" className="my-2 " style={{ fontWeight:"bold", fontSize:"20px"}}>
          <Link to ="/commertial" className="text-decoration-none">
            Commercial Plumbing
            </Link>
            </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4" className="my-2 " style={{ fontWeight:"bold", fontSize:"20px"}}>
          <Link to ="/others" className="text-decoration-none">
            Others
            </Link>
            </NavDropdown.Item>
        </NavDropdown>

       
        <Nav.Link href="#home" className="properties  ">
        <Link to ="/contact" className="text-decoration-none text-white">
          Contacts
          </Link>
          </Nav.Link>
  
      </Nav>
       <Form className="d-flex ms-auto">
         <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
          
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar> 

    );
};

export default Navs;