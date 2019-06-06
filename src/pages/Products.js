import React from 'react'

import './styles/Product.css'

import ProductListCategory from '../components/ProductListCategory'
import ProductCategoryFull from '../components/ProductCategoryFull'
import ProductCategoryMin from '../components/ProductCategoryMin'

function Products() {

    return(
        <div className='product'>
            <aside className='product-categories-full'>
                <ProductCategoryFull/>
            </aside>
            <aside className='product-categories-min'>
                <ProductCategoryMin/>
            </aside>
            <article className='product-category-list'>
                <ProductListCategory/>
            </article>              
        </div>
    )
}

export default Products
