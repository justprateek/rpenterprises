import React from 'react';
import './../styles/components/servicesHeading.scss';


// const element = document.getElementById('serve');

// element.onclick = ()=>{
//  console.log('click hua')
// }




const ServicesHeading = (props)=>{
    
    return (
        <div className="services-title">
       <p> {props.title} </p>
        </div> 

    )
}

export default ServicesHeading