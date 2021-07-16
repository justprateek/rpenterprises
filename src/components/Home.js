import React from 'react';
import {Link} from 'react-router-dom';
// import Typewriter from 'typewriter-effect';
import Products from './Products';
import Gallery from './Gallery';
import Footprints from './Footprints'
import { FiPhoneCall } from "react-icons/fi";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import './../styles/components/home.scss';

{/* <Typewriter
  onInit={(typewriter) => {
    typewriter.typeString('We provide excellent services in construction of Highways and Airports')
//       .pauseFor(2500)
      .start();
  }} */}


const Home =()=>(
    <div className="home">
        <div className="home-image">
        <p>We provide excellent services in construction of <br></br><span className="highway">Highways & Airports</span></p>
        
        </div>
        <div className="home-div"  id="aboutus">
        <div className="about-box">
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
        <div className="home-div" id="products">
                <h2>Our Products</h2>
                <div className="products-div">
                        <Products 
                                title="CONCRETE / ASHPHALT CUTTING MACHINES."
                        />
                        <Products 
                                title="CONCRETE / ASHPHALT CUTTING BLADES"
                        />
                        <Products 
                                title="KERB CUTTING MACHINES"
                        />
                        <Products 
                                title="PQC (CONCRETE) CRACK REPAIR MATERIALS"
                        />
                        <Products 
                                title="PAVER BLOCKS"
                        />
                        <Products 
                                title="CEMENT AND CLAY BRICKS"
                        />
                        <Products 
                                title="DOWEL BAR SLEEVES"
                        />
                        <Products 
                                title="POLYTHENE (PLASTIC) SHEETS (SEPERATION MEMBRANE)"
                        />
                </div>
        </div>
        
        <Footprints />
        <div className="home-div">
                <h2>Gallery</h2>
                <div className="gallery">
                <Gallery 
                        img='/assets/images/carousel/gallery/img1.jpg'
                />
                <Gallery 
                         img='/assets/images/carousel/gallery/img2.jpg'
                />
                <Gallery 
                         img='/assets/images/carousel/gallery/img3.jpg'
                />
                <Gallery 
                         img='/assets/images/carousel/gallery/img4.jpg'
                />
                <Gallery 
                         img='/assets/images/carousel/gallery/img5.jpg'
                />
                <Gallery 
                         img='/assets/images/carousel/gallery/img6.jpg'
                />
                <Gallery 
                         img='/assets/images/carousel/gallery/img7.jpg'
                />
                <Gallery 
                         img='/assets/images/carousel/gallery/img8.jpg'
                />
                <Gallery 
                         img='/assets/images/carousel/gallery/img9.jpg'
                />
                </div>
                
        </div>

        <div className="contact-div">
                <div className="contact-1 blocks">
                        <h2>Our Company</h2>
                        <Link className="links" to='#aboutus'><p>About us</p></Link>
                        <Link className="links" to='/Clients'><p>Our Projects</p></Link>
                        <Link className="links" to='/Career'><p>Career at RP Enterprises</p></Link>
                        <Link className="links" to='/Contact'><p>Contact us</p></Link>
                </div>
                <div className="contact-2 blocks">
                        <h4>Email: rpeald@gmail.com <br></br>rpeald@yahoo.com</h4>
                        <h4><FiPhoneCall />  +91 9936514886</h4>
                        <a href=""><AiFillFacebook /></a>
                        <a href=""><AiFillLinkedin /></a>
                        <a href="mailto: rpeald@gmail.com"><SiGmail /></a>
                </div>
                <div className="contact-3 blocks">
                        <h2>Corporate office</h2>
                        <p>303 Harwara, Saket Nagar, Dhomanganj<br></br> Prayagraj (U.P.) – 211 015</p>
                </div>
        </div>
    </div>
);

export default Home;