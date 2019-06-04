import React from 'react'
import { Router, Route, Link, withRouter } from 'react-router-dom';

import './styles/Product.css'

import ProductListCategory from '../components/ProductListCategory'
import ProductCategoryFull from '../components/ProductCategoryFull'
import ProductCategoryMin from '../components/ProductCategoryMin'

function Products() {

    return(
        <div className='product'>
            <div className='product-categories-full'>
                <ProductCategoryFull/>
            </div>
            <div className='product-categories-min'>
                <ProductCategoryMin/>
            </div>
            <div className='product-category-list'>
                <ProductListCategory/>
            </div>              
        </div>
    )
}

export default Products
