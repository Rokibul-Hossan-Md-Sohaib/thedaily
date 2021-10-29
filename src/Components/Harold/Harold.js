import React from 'react';
import image from "../../image/image13.jpg"
import "./Harold.css"

const Harold = () => {
    return (
        <section className="features-service pb-0  my-5 mb-5 ">
        <div className="services mb-5">
  <div className="row mb-5">
     
      <div className="col-md-7 align-self-center text-white" >
           <h1 className="font-weight-bold text-white">HAROLD MCCLEAVER </h1>
           <h4 className="text-white mt-5 "> PLUMBINGPRO IS A BEST SANTA MONICA PLUMBING SERVICE FOUNDED BACK IN 1990 AND OWNED BY US ARMY VETERAN.</h4>
           <p className="text-danger  mt-5 ">On top of that, the team of our plumbing company consists of many other US army 
           vets, all of whom have a long experience in both all kinds of plumbing fixes and all kinds of mechanical tasks.
            We guarantee you that no other plumbing 
           company works with such a pace and quality as we do!</p>

               <button className="btn btn-primary pb-3 pt-3 mt-4">Read More</button>
      </div>
      <div className="col-md-5 mr-5 mb-5 m-md-0">
           <img className="img-fluid" src={image} alt="" />
      </div>
    
  </div>
  </div>
</section>
    );
};

export default Harold;