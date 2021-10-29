import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Navs from '../Navs/Navs';


const Contact = () => {
 
    const handleChange= () =>{
        alert("Thanks For Contact" )
    }
    return (
        <div>
<Navs/>
        <div className="container row my-5">
        <div className="col-md-4" >
          
           <h1 className="fst-italic text-secondary my-5">Contact Us</h1>
           <div  className="my-5">
            <h3 className="d-flex text-success">ADDRESS: <p className="text-secondary ms-2 fs-5"> 4578 Marmora Road, Glasgow, D04 89GR</p></h3>
            <h3 className="d-flex text-success">PHONE: <p className="text-secondary ms-2 fs-5 my-2"> (800) 123-0045; (800) 123-0046</p></h3>
            <h3 className="d-flex text-success">OPEN: <p className="text-secondary ms-2 fs-5 my-2"> 10am-6px</p></h3>
           </div>
        </div>
        <div className="col-md-7 ms-5">
            <h1>LET’S HAIR YOUR PLUMBER</h1>
      <Form>
  <Row className="mb-3 ">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridName">
      <Form.Label>Name</Form.Label>
      <Form.Control type="name" placeholder="Name" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridTelephone">
    <Form.Label>Phone</Form.Label>
    <Form.Control placeholder="Phone" />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Categories</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Washing Machine</option>
        <option>Plumbing Instalation</option>
        <option>Emergency Plumber</option>
        <option>Water Plumber</option>
        <option>Comeertial Plumber</option>
        <option>Others</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Place</Form.Label>
      <Form.Select defaultValue="Choose...">
      <option>Home</option>
        <option>Office</option>
        <option>Industry</option>
        <option>Others</option>
      </Form.Select>
    </Form.Group>

 
  </Row>
  <FloatingLabel controlId="floatingTextarea2" label="Massage">
    <Form.Control
      as="textarea"
      placeholder="Leave a your problem message here"
      style={{ height: '100px' }}
    />
  </FloatingLabel>
  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button onClick={handleChange} variant="primary" type="submit" className="btn btn-danger">
    Submit
  </Button>
</Form>
        </div>
        </div>
        <Footer/>
        </div>
    );
};

export default Contact;