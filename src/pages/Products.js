import React from 'react'
import { Router, Route, Link, withRouter } from 'react-router-dom';

import './styles/Product.css'

import ProductListCategory from '../components/ProductListCategory'

class Products extends React.Component {
    state = {}

    componentDidMount() {
        this.setLocation(this.props.location)
    }

    componentWillReceiveProps(nextProps) {
        this.setLocation(nextProps.location)
    }

    setLocation(location) {
        let url = location.pathname.substring(10)
        if(!url) {
            url = 'all'
        }

        this.setState({category: url.toLowerCase()})
    }

    handleClick(category) {
        this.setState({category})
        this.props.history.push(`/products/${category}`)
    }

    render() {
        return(
            <div className='product'>
                <div className='product-categories'>
                    <div className='product-categories-head'>
                        <div className='product-categories-tittle'>Categories</div>
                        <Link to='/products/all'
                            className={`product-categories-item selectable-item ${this.state.category === 'all' ? 'product-categories-item-selected' : ''}`}
                        >
                            <i className='material-icons product-categories-item-icon' id='scr'>list</i>
                            <span>All</span>
                        </Link>
                    </div>
                    <div>
                        <Link to='/products/tech'
                        className={`product-categories-item selectable-item ${this.state.category === 'tech' ? 'product-categories-item-selected' : ''}`}>
                            <i className='material-icons product-categories-item-icon' id='scr'>laptop</i>
                            <span>Tech</span>
                        </Link>
                        <Link to='/products/services'
                        className={`product-categories-item selectable-item ${this.state.category === 'services' ? 'product-categories-item-selected' : ''}`}>
                            <i className='material-icons product-categories-item-icon' id='scr'>build</i>
                            <span>Services</span>
                        </Link>
                        <Link to='/products/office'
                        className={`product-categories-item selectable-item ${this.state.category === 'office' ? 'product-categories-item-selected' : ''}`}>
                            <i className='material-icons product-categories-item-icon' id='scr'>folder</i>
                            <span>Office</span>
                        </Link>
                    </div>
                    
                </div>
                <div className='product-category-list'>
                    <ProductListCategory category={this.state.category}/>
                </div>              
            </div>
    )}
}

export default withRouter(Products)
