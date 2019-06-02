import React from 'react'

import './styles/Product.css'

import ProductListCategory from '../components/ProductListCategory'

class Products extends React.Component {
    render() {
        return(
            <div className="product">
                <div className="product-categories">
                    <div className="product-categories-head">
                        <div className="product-categories-tittle">Categories</div>
                        <div className="product-categories-item selectable-item">
                            <img src="" alt=""/>
                            All
                        </div>
                    </div>
                    <div className="product-categories-list selectable-item">
                        Tech
                    </div>
                    
                </div>
                <div className="product-category-list">
                    <ProductListCategory className="test"/>
                </div>              
            </div>
    )}
}

export default Products
