import React from 'react';
import Footer from '../../Footer/Footer';
import Navs from '../../Navs/Navs';
import "./Emergency.css"
import EmergencyBlog from './EmergencyBlog/EmeregencyBlog';


const Emergency = () => {
    return (
       
       <section>
         <Navs/>
<div className="  emergency mb-5">
   <h1 className="emer ">Emergency Issues</h1>
</div>
<EmergencyBlog/>
      <Footer/>
       </section>
    );
};

export default Emergency;