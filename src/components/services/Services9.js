import React from 'react';
import {Link} from 'react-router-dom';
import servicesTitle from '../servicesTitle';
import './../../styles/components/services.scss';

// onClick={()=>{window.location.pathname = val.link}} 
const Services1 =()=>(
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
            <h4>{servicesTitle[8].title}</h4>
            <p>{servicesTitle[8].text}</p>
            <img src={servicesTitle[8].img1} />
            <img src={servicesTitle[8].img2} />
            <img src={servicesTitle[8].img3} />
    </div>


    </div>
   
    </div>
);

export default Services1;