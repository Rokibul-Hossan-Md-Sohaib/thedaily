import React from 'react';
import image from "../../image/logo.jpg"
import {  faFacebookF , faTwitter, faInstagram,faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "./Footer.css"
const Footer = () => {
    return (
        <footer className="footer">
         
          
               <div className="d-flex  justify-content-center mt-5 ">
                   <div className="img ">
                   <img src={image} alt="" />
                   </div>
                   <div className=" d-flex">
                
        <a href="mailto:hege@example.com  " className="text-decoration-none text-white">SUMP PUMPS</a>
        <p className="about mr-auto"> 
        <a href="mailto:hege@example.com "className="text-decoration-none text-white">DRAIN & PIPES</a></p> 
        <p className="about mr-auto"> 
        <a href="mailto:hege@example.com" className="text-decoration-none text-white">COMMERTIAML PUMPS</a></p>
                   </div>
                   <div className="  d-flex icons">
                   <FontAwesomeIcon className="icon " icon={faFacebookF} />
                   <FontAwesomeIcon className="icon " icon={faTwitter} />
                   <FontAwesomeIcon className="icon " icon={faInstagram} />
                   <FontAwesomeIcon className="icon " icon={faGoogle} />
                   </div>
                   </div> 
                  
        <hr style={{height:"2px",borderWidth:"0",color:"gray",backgroundColor:"gray"}}></hr>
        <p>Adress: 4578 Marmora Road, Glasgow, D04 89GR</p>
        <p>Phone: +4568952</p>
      </footer>
   
    );
};

export default Footer;