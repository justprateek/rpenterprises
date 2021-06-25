import React from 'react';
import './../styles/components/Footprints.scss';


const Footprints = (props)=>{
    return (
        <div className="footprints">
        <div className="footprint-image">
            <img src="/assets/images/carousel/india.jpg"></img>
        </div>
            <div className="footprint-text">
                <p>Our <br></br><span className="footprints-xxl">Footprints</span><br></br> across the<br></br><span className="footprints-xxl">Nation</span></p>
            </div>
            
        </div>
    )
}

export default Footprints