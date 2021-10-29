import React from 'react';
import ServiceShow from './ServiceShow';
import { faHome, faWarehouse, faAnchor, faUserCog, faArchway, faArrowsAlt } from '@fortawesome/free-solid-svg-icons'

 const blogdata =[

    {
       
        name:"COMERTIAL PLUMBING",
       icon: faHome,
        description: "A majority of commercial buildings have handicap plumbing equipment installed, in order to comply with occupancy codes. We know how…o ",
        background: "primary"
      },
      {
    
        name:"WATER DAMAGE RESTORATION",
        icon: faWarehouse,
        description: "When you are dealing with any kind of water damage, taking a timely action is crucial… Every successful Water Damage… ",
       
        background: "primary"
      },
      {
    
        name:"OUTDOOR PLUMBING ",
        icon: faAnchor,
        description: "Like the regular kitchen and bathroom faucets, outdoor faucets can sometimes become damaged or begin to leak. This kind of… ",
        background: "primary"
      },
      {
    
        name:"EMERGENCY PLUMBER",
        icon: faUserCog,
        description: "With so many years of experience in fixing residential and commercial plumbing, there’s nothing that we cannot repair. The best… ",
        background: "primary"
      },
      {
    
        name:"WASHING MACHINES REPAIR ",
        icon: faArchway,
        description: "Known for causing different sorts of discrepancies for pipes and plumbing systems, washers need regular maintenance. After we clean up… ",
        background: "primary"
      },
      {
    
        name:"PLUMBING INSTALLATIONS",
        icon: faArrowsAlt,
        description: "If you’re looking to install a brand new faucet, shower system or connect a washer to the plumbing, we’re here…",
        background: "primary"
      },
    ]
const Services = () => {
    return (
      
     <div>
        <h1 className="text-center text-secondary"> Our Services</h1>
   
        <section className="d-flex justify-content-center my-5 ">

         
          <div className="row">
                {
                 blogdata.map(blog => <ServiceShow blog={blog}/>)
                }
      
             
            </div>
       </section>
       </div>
    );
};

export default Services;