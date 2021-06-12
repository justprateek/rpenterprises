import React from 'react';
import './../styles/components/ServicesDetails.scss';


// const element = document.getElementById('serve');

// element.onclick = ()=>{
//  console.log('click hua')
// }



const ServicesDetails = (props)=>{
    return (
        <div id="serve" className="services-Details">
        <h3>{props.heading}</h3>
        <p>{props.text}</p>
        <img src={props.img1} />
        <img src={props.img2} />
        </div> 

    )
}

export default ServicesDetails