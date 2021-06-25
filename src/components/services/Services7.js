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
            <h4>{servicesTitle[6].title}</h4>
            <p>{servicesTitle[6].text}</p>
            <img src={servicesTitle[6].img1} />
            <img src={servicesTitle[6].img2} />
            <img src={servicesTitle[6].img3} />
    </div>


    </div>
   
    </div>
);

export default Services1;