import React from 'react';
import { Link } from 'react-router-dom';
import wash from "../../../../image/wash.jpg"
import "./WashingBlog.css"
const WashingBlog = () => {
    return (
        <section className="features-service pb-0 mt-5">
        <div className="  container">
  <div className="row mt-5">
     
      <div className="col-md-7 align-self-center maintext " >
           <h1 className="">Washing Mechaniq </h1>
           <p className="text-secondary  mt-5 ">On top of that, the team of our plumbing company consists of many other US army 
           vets, all of whom have a long experience in both all kinds of plumbing fixes and all kinds of mechanical tasks.
            We guarantee you that no other plumbing 
           company works with such a pace and quality as we do!</p>

              <Link to="/contact">
              <button className="btn btn-secondary pb-3 pt-3 mt-4">CONTACT</button>
              </Link>
      </div>
      <div className="col-md-5 mr-5 mb-5 m-md-0 ">
           <img className="img-fluid image" src={wash} alt="" />
      </div>
    
  </div>
  </div>
</section>
    );
};

export default WashingBlog;