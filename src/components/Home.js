import React from 'react';
import Typewriter from 'typewriter-effect';
import './../styles/components/home.scss';




const Home =()=>(
    <div className="home">
        <div className="home-image">
        <p><Typewriter
  onInit={(typewriter) => {
    typewriter.typeString('We provide excellent services in construction of Roads and Airports')
//       .pauseFor(2500)
      .start();
  }}
/></p>
        
        </div>
        <div className="about-box">
        <div className="about-box2">
                <h2>About Us</h2>
                        <div className="aboutus">
                                <p>
                                R P Enterprises Prayagraj, India offers various services in roads highways airports construction a wide
                        range of construction activities, especially in concrete roads such as crack repair solutions, concrete road
                        cutting services, pqc Laying etc.
                                </p>
                                <p>
                        R P Enterprises was established in oct 2008 by Mr Ram Prasad pandey. We started our company to meet
                        peoples expectation with good quality of services.
                        Main core business is services in concrete roads (PQC roads) such as laying (Manually and by Paver), PQC
                        joint cutting & filling, kerb casting & cutting in Highways & airports. Further we extended our services to
                        PQC roads crack repairs, PQC full depth cutting, PQC hard texturing (Retexturing), Thermo plastic road
                        marking, water proofing, grouting etc.
                                </p>
                                <p>
                        Mr. Ram Pasad Pandey is a Mechanical Engineer having a work experience of 20 years in
                        construction field such as Tunnels, Buildings, Roads, Highways and Airports. Worked from site Incharge to
                        manager level in various aspects marketing, cost setting, Project execution within frame of cost & time.
                                </p>
                        </div>
        </div>
        </div>
    </div>
);

export default Home;