
import React from 'react';
import './product-list.style.css'
import Product from '../product/product.component'
import {products} from "../../data.js"

const ProductList = () => {
    return (
        <div className='pl'>
            <div className='pl-texts'>
                <h1 className='pl-title'>Create & inspire It's Lama</h1>
                <p className='pl-desc'>
                    Lama is a creative portfolio that your work has been waiting for, beautiful and profesional.
                </p>
            </div>
            <div className='pl-list'>
                {products.map((item) => (
                    <Product key={item.id} img={item.img} link={item.link}/>
                ) )}
            </div>
        </div>
    );
};

export default ProductList;