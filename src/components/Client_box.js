import React from 'react';
import './../styles/components/clientbox.scss';


const Client_Box = (props)=>{
    return (
        <div className="clientbox">
            <img src={props.img} />
            <p>{props.title}</p>
        </div>
    )
}

export default Client_Box