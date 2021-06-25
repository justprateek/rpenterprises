import React from 'react';
import {Link} from 'react-router-dom';

import './../../styles/components/services.scss';

const servicesTitle = [
    {
        title: 'PQC / DLC LAYING (concrete roads)',
        link: '/Services/1'
    },
    {
        title: 'ASHPHALT ROAD CONSTRUCTION',
        link: '/Services/2'
    },
    {
        title: 'PQC JOINT CUTTING & SEALING',
        link: '/Services/4'
    },
    {
        title: 'KERB CASTING & CUTTING',
        link: '/Services/5'
    },
    {
        title: 'PQC REPAIRS WITH SPECIAL MORTERS',
        link: '/Services/6'
    },
    {
        title: 'PQC ROAD RETEXTURING',
        link: '/Services/7'
    },
    {
        title: 'PQC FULL DEPTH CUTTING & DISMANTLING',
        link: '/Services/8'
    },
    {
        title: 'DOWEL BAR CUTTING',
        link: '/Services/9'
    },
    {
        title: 'THERMOPLASTIC ROAD MARKING',
        link: '/Services/10'
    },
    {
        title: 'WATER PROOFING',
        link: '/Services/11'
    },
    {
        title: 'ASHPALT ROAD CUTTING',
        link: '/Services/12'
    },
    {
        title: 'SPECIAL PURPOSE WORKS & CONSULTATION',
        link: '/Services/13'
    },
    {
        title: 'PAINTINGS (EPOXY)',
        link: '/Services/14'
    },
    {
        title: 'BUILDING / RETAINING WALL',
        link: '/Services/15'
    },
    {
        title: 'ROAD SIDE & MEDIAN DRAIN CONSTRUCTION',
        link: '/Services/16'
    },
    {
        title: 'CEMENT BRICKS / PAVER BLOCK MAKING',
        link: '/Services/17'
    },
    {
        title: 'GROUTING',
        link: '/Services/18'
    },
];
// onClick={()=>{window.location.pathname = val.link}} 
const Services1 =()=>(
    <div className="services">
    <h2>Our Services</h2>

    <div className="services-box">
    <div className="services-heading">
            {servicesTitle.map((val)=>{
                return (
                    <div className="services-title">
                        <p>{val.title}</p>
                        </div>
                    );
            })}
    </div>
    <div className="services-details" id="services-content">
                <h4>PQC / DLC LAYING</h4>
                <p>yoo .</p>
        </div>

    </div>
   
    </div>
);

export default Services1;