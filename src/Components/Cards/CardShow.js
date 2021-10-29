import React from 'react';
import "./Cards.css"

const CardShow = (props) => {
    const {name, description, image } = props.card;
    return (
        <div className="cards col-md-3 text-black mb-5 mt-5">
            
        <div class="card ">
        <div class="card-img">
            <img src={image} style={{width:"296px", height:"448px"}} alt="" />
        </div>
        <div class="card-body">
            <span class="bg"></span>
            <span class="bg"></span>
            <span class="bg"></span>
            <div class="content">
                <p class="title" style={{fontSize:"20px"}}>{name}</p>
                <small class="para">{description}</small>
            </div>
        </div>
    </div>
    </div>
    );
};

export default CardShow;