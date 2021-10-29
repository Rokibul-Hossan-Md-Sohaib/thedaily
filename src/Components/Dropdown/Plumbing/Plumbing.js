import React from 'react';
import Footer from '../../Footer/Footer';
import Navs from '../../Navs/Navs';
import "./Plumbing.css"
import PlumbingBlog from './PlumbingBlog/PlumbingBlog';


const Plumbing = () => {
    return (
       
       <section>
         <Navs/>
<div className="  plumbing mb-5">
   <h1 className="plumb ">PLUMBING INSTALLATIONS</h1>
</div>
      <PlumbingBlog/>
      <Footer/>
       </section>
    );
};

export default Plumbing;