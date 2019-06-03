import React from 'react'

import './styles/ProductListCategory.css'

class ProductListCategory extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="product-list-head">Showing 10 products - hidden 5</div>
                <div>{this.props.category}</div>
            </React.Fragment>
        )
    }
}

export default ProductListCategory
