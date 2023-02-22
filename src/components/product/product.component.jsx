
import React from 'react';
import './product.style.css'

const Product = ({ img, link, descri, github }) => {
    return (
        <div className='p'>
            <div className='p-browser'>
                <div className='p-circle'></div>
                <div className='p-circle'></div>
                <div className='p-circle'></div>
            </div>
            <a href={link} target="_blank" rel="noreferrer">
                <img src={img} alt='' className='p-img' />
            </a>
            <p className='p-text'>{descri}</p>
            <a href={github} className='btn' target="_blank" rel="noreferrer">See Code</a>
        </div>

    );
};

export default Product;
