import React from 'react';
import './../styles/components/Gallery.scss';


const Gallery = (props)=>{
    return (
        <div className="Gallery-img">
            <img src={props.img} />
        </div>
    )
}

export default Gallery