import React from 'react';
import {Link} from 'react-router-dom';
import servicesTitle from './servicesTitle';
import './../styles/components/services.scss';

// onClick={()=>{window.location.pathname = val.link}} 
const Services =()=>(
    <div className="services">
    <h2>Our Services</h2>

    <div className="services-box">
        <div className="services-heading">
                {servicesTitle.map((val)=>{
                    return (
                        <div className="services-title">
                            <Link className="links" to={val.link}><p>{val.title}</p></Link>
                            </div>
                        );
                })}
        </div>


        <div className="services-details" id="services-content">
                <h4>PQC / DLC LAYING</h4>
                <p>We do the PQC & DLC (concrete roads), Runways, taxiways, Airfield, etc laying
manually and by paver also. We have skilled special teams for good quality
work. We do take the job with our machinery, tools & tackle.</p>
                <img src='/assets/images/carousel/gallery/img1.jpg' />
                <img src='/assets/images/carousel/gallery/img1.jpg' />
                <img src='/assets/images/carousel/gallery/img1.jpg' /> 
        </div>
    </div>
    </div>

);

export default Services;