import React from 'react';
import Footer from '../../Footer/Footer';
import Navs from '../../Navs/Navs';
import "./Washing.css"
import WashingBlog from './WashingBlog/WashingBlog';

const Washing = () => {
    return (
       
       <section>
         <Navs/>
<div className="  washing mb-5">
   <h1 className="title ">Washing Machine <br />Repair</h1>
</div>
      <WashingBlog/>
      <Footer/>
       </section>
    );
};

export default Washing;