import React from 'react';
import './../styles/components/products.scss';


const Products = (props)=>{
    return (
        <div className="Products">
            <p>{props.title}</p>
        </div>
    )
}

export default Products