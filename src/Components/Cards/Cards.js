import React from 'react';
import image12 from "../../image/image12.jpg"
import image8 from "../../image/image8.jpg"
import image7 from "../../image/image7.jpg"
import image9 from "../../image/image9.jpg"
import image10 from "../../image/image10.jpg"
import image11 from "../../image/image11.jpg"
import image13 from "../../image/image13.jpg"

import image14 from "../../image/image14.jpg"
import CardShow from './CardShow';

const Carddata = [

    {

        name: "COMERTIAL PLUMBING",
        image: image12,
        description: "A majority of commercial buildings have handicap plumbing equipment installed, in order to comply with occupancy codes. We know how…o ",
        background: "primary"
    },
    {

        name: "WATER DAMAGE RESTORATION",
        image: image8,
        description: "When you are dealing with any kind of water damage, taking a timely action is crucial… Every successful Water Damage… ",

        background: "primary"
    },
    {

        name: "OUTDOOR PLUMBING ",
        image: image11,
        description: "Like the regular kitchen and bathroom faucets, outdoor faucets can sometimes become damaged or begin to leak. This kind of… ",
        background: "primary"
    },
    {

        name: "EMERGENCY PLUMBER",
        image: image10,
        description: "With so many years of experience in fixing residential and commercial plumbing, there’s nothing that we cannot repair. The best… ",
        background: "primary"
    },
    {

        name: "WATER DAMAGE RESTORATION",
        image: image9,
        description: "When you are dealing with any kind of water damage, taking a timely action is crucial… Every successful Water Damage… ",

        background: "primary"
    },
    {

        name: "WASHING MACHINES REPAIR ",
        image: image13,
        description: "Known for causing different sorts of discrepancies for pipes and plumbing systems, washers need regular maintenance. After we clean up… ",
        background: "primary"
    },
    {

        name: "PLUMBING INSTALLATIONS",
        image: image7,
        description: "If you’re looking to install a brand new faucet, shower system or connect a washer to the plumbing, we’re here…",
        background: "primary"
    },
    {

        name: "EMERGENCY PLUMBER",
        image: image14,
        description: "With so many years of experience in fixing residential and commercial plumbing, there’s nothing that we cannot repair. The best… ",
        background: "primary"
    },
]
const Cards = () => {
    return (
        <div className="employ ">
            <h1 className="font-weight-bold "> OUR EMPLOYES</h1>
            <h3 style={{ marginLeft: "160px", fontFamily: "sans-serif", color: "rgb(83, 83, 83)" }}> OUR ENERGY</h3>
            <section className="d-flex justify-content-center my-5 ">
                <div className="row">
                    {
                        Carddata.map(card => <CardShow card={card} />)
                    }

                </div>
            </section>
        </div>
    );
};

export default Cards;