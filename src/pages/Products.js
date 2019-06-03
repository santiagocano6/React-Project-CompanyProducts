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
                            <i class="material-icons product-categories-item-icon" id="scr">list</i>
                            All
                        </div>
                    </div>
                    <div className="product-categories-list">
                    <div className="product-categories-item selectable-item">
                            <i class="material-icons product-categories-item-icon" id="scr">laptop</i>
                            Tech
                        </div>
                        <div className="product-categories-item selectable-item">
                            <i class="material-icons product-categories-item-icon" id="scr">build</i>
                            build
                        </div>
                        <div className="product-categories-item selectable-item">
                            <i class="material-icons product-categories-item-icon" id="scr">folder</i>
                            Office
                        </div>
                    </div>
                    
                </div>
                <div className="product-category-list">
                    <ProductListCategory className="test"/>
                </div>              
            </div>
    )}
}

export default Products
