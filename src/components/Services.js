import React from 'react';
import ServicesHeading from './ServicesHeading';
import ServicesDetails from './ServicesDetails';
import './../styles/components/services.scss';


const func= () =>{
    // document.getElementById('div1').style.display="none"
    // document.getElementById('div2').style.display="block"
    console.log('hello');
}

const Services =()=>(
    <div className="services">
    <h2>Our Services</h2>

    <div className="services-box">
    <div className="services-heading">
    <ServicesHeading 
            title='PQC / DLC LAYING (concrete roads)'
        />
        <ServicesHeading 
            title='ASHPHALT ROAD CONSTRUCTION'
        />
        <ServicesHeading 
            title='PQC JOINT CUTTING & SEALING'
        />
        <ServicesHeading 
            title='KERB CASTING & CUTTING'
        />
        <ServicesHeading 
            title='PQC REPAIRS WITH SPECIAL MORTERS'
        />
        <ServicesHeading 
            title='PQC ROAD RETEXTURING'
        />
        <ServicesHeading 
            title='PQC FULL DEPTH CUTTING & DISMANTLING'
        />
        <ServicesHeading 
            title='DOWEL BAR CUTTING'
        />
        <ServicesHeading 
            title='THERMOPLASTIC ROAD MARKING'
        />
        <ServicesHeading 
            title='WATER PROOFING'
        />
        <ServicesHeading 
            title='ASHPALT ROAD CUTTING'
        />
        <ServicesHeading 
            title='SPECIAL PURPOSE WORKS & CONSULTATION'
        />
        <ServicesHeading 
            title='PAINTINGS (EPOXY)'
        />
        <ServicesHeading 
            title='BUILDING / RETAINING WALL'
        />
        <ServicesHeading 
            title='ROAD SIDE & MEDIAN DRAIN CONSTRUCTION'
        />
        <ServicesHeading 
            title='CEMENT BRICKS / PAVER BLOCK MAKING'
        />
        <ServicesHeading 
            title='GROUTING'
        />
    </div>
    <div className="services-details">
        <div onClick={func()} id="div1"><ServicesDetails 
                
                heading='PQC / DLC LAYING (concrete roads)'
                text='We do the PQC & DLC (concrete roads), Runways, taxiways, Airfield, etc laying
    manually and by paver also. We have skilled special teams for good quality
    work. We do take the job with our machinery, tools & tackle.'
            img1 = '/assets/images/carousel/carousel1.jpg'
            img2 = '/assets/images/carousel/carousel2.jpg'
            img3 = '/assets/images/carousel/carousel3.jpg'

            /></div>
            <div id="div2"><ServicesDetails 
                
                heading='ASHPHALT ROAD CONSTRUCTION'
                text='We do this job by paver as per standards. We have specialized team for better
Quality of work. We do take the job with our machinery, tools & tackle'
            img1 = '/assets/images/carousel/carousel1.jpg'
            img2 = '/assets/images/carousel/carousel2.jpg'
            img3 = '/assets/images/carousel/carousel3.jpg'

            /></div>
            <div id="div3"><ServicesDetails 
                
                heading='PQC JOINT CUTTING & SEALING / ASHPALT ROAD CUTTING'
                text='We do the concrete (PQC) contraction, longitudinal, expansion joint cutting to
various dimensions as per requirements with standards. We do the joint sealing
operations with various methods with various materials such as polysulphide,
polyurathene, neoprene, silicone etc. We also do the joint sealing for buildings also.'
            img1 = '/assets/images/carousel/carousel1.jpg'
            img2 = '/assets/images/carousel/carousel2.jpg'
            img3 = '/assets/images/carousel/carousel3.jpg'

            /></div>
         
    </div>
    </div>
    
       
    </div>
);

export default Services;