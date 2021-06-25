import React from "react";
import { Link } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
// import emailjs from "emailjs-com";
import './../styles/components/contact.scss';





// function sendEmail(e) {
//     e.preventDefault();

// emailjs.sendForm('service_tk592jp', 'template_4aze7fb', e.target, 'user_2haGCAvxO543E0qbduL1j')
//     .then((result) => {
//         console.log(result.text);
//     }, (error) => {
//         console.log(error.text);
//     });
//     e.target.reset()
// }



const Contact =()=>(
    <div>
     <div className="contact-form">
     <h2>Send us a Message</h2>
     <div className="container">
            <form>
                    <div className="form">
                        <div className="">
                            <input type="text" className="input-field" placeholder="Name" name="name"/>
                        </div>
                        <div className="">
                            <input type="email" className="input-field" placeholder="Email Address" name="email"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="input-field" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="">
                            <textarea className="input-field" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="">
                            <input type="submit" className="form-submit" value="Send Message"></input>
                        </div>
                    </div>
                </form>
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




export default Contact;