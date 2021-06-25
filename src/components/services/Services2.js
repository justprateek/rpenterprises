import React from 'react';
import {Link} from 'react-router-dom';

import './../../styles/components/services.scss';

const servicesTitle = [
    {
        title: 'PQC / DLC LAYING (concrete roads)',
        link: '/Services/1',
        text: "We do the PQC & DLC (concrete roads), Runways, taxiways, Airfield, etc laying manually and by paver also. We have skilled special teams for good quality work. We do take the job with our machinery, tools & tackle",
        img: '/assets/images/l&t.jpg'
    },
    {
        title: 'ASHPHALT ROAD CONSTRUCTION',
        link: '/Services/2',
        text: 'We do this job by paver as per standards. We have specialized team for better Quality of work. We do take the job with our machinery, tools & tackle',
        img: '/assets/images/l&t.jpg'
    },
    {
        title: 'PQC JOINT CUTTING & SEALING',
        link: '/Services/4',
        text: '',
        img: '/assets/images/l&t.jpg'
    },
    {
        title: 'KERB CASTING & CUTTING',
        link: '/Services/5',
        text: '',
        img: '/assets/images/l&t.jpg'
    },
    {
        title: 'PQC REPAIRS WITH SPECIAL MORTERS',
        link: '/Services/6',
        text: '',
        img: '/assets/images/l&t.jpg'
    },
    {
        title: 'PQC ROAD RETEXTURING',
        link: '/Services/7',
        text: '',
        img: '/assets/images/l&t.jpg'

    },
    {
        title: 'PQC FULL DEPTH CUTTING & DISMANTLING',
        link: '/Services/8',
        text: '',
        img: '/assets/images/l&t.jpg'
    },
    {
        title: 'DOWEL BAR CUTTING',
        link: '/Services/9',
        text: '',
        img: '/assets/images/l&t.jpg'
    },
    {
        title: 'THERMOPLASTIC ROAD MARKING',
        link: '/Services/10',
        text: '',
        img: '/assets/images/l&t.jpg'
    },
    {
        title: 'WATER PROOFING',
        link: '/Services/11',
        text: '',
        img: '/assets/images/l&t.jpg'
    },
    {
        title: 'ASHPALT ROAD CUTTING',
        link: '/Services/12',
        text: '',
        img: '/assets/images/l&t.jpg'
    },
    {
        title: 'SPECIAL PURPOSE WORKS & CONSULTATION',
        link: '/Services/13',
        text: '',
        img: '/assets/images/l&t.jpg'
    },
    {
        title: 'PAINTINGS (EPOXY)',
        link: '/Services/14',
        text: '',
        img: '/assets/images/l&t.jpg'
    },
    {
        title: 'BUILDING / RETAINING WALL',
        link: '/Services/15',
        text: '',
        img: '/assets/images/l&t.jpg'
    },
    {
        title: 'ROAD SIDE & MEDIAN DRAIN CONSTRUCTION',
        link: '/Services/16',
        text: '',
        img: '/assets/images/l&t.jpg'
    },
    {
        title: 'CEMENT BRICKS / PAVER BLOCK MAKING',
        link: '/Services/17',
        text: '',
        img: '/assets/images/l&t.jpg'
    },
    {
        title: 'GROUTING',
        link: '/Services/18',
        text: '',
        img: '/assets/images/l&t.jpg'
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
                    <Link className="links" to={val.link}><p>{val.title}</p></Link>
                    </div>
                    );
            })}
    </div>
    <div className="services-details" id="services-content">
                <h4>{servicesTitle[1].title}</h4>
                <p>{servicesTitle[1].text}</p>
                <img src={servicesTitle[1].img} />
        </div>

    </div>
   
    </div>
);

export default Services1;