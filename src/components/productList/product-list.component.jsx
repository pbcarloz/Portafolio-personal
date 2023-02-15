
import React from 'react';
import './product-list.style.css'
import Product from '../product/product.component'
import { products } from "../../data.js"

const ProductList = () => {
    return (
        <div className='pl'>
            <div className='pl-texts'>
                <h1 className='pl-title'>Some of My Projects</h1>
                <p className='pl-desc'>
                    These are some projects i have built from scratch using Front End Web Development Technologies.
                </p>
            </div>
            <div className='pl-list'>
                {products.map((item) => (
                    <Product key={item.id} img={item.img} link={item.link} descri={item.desc} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;