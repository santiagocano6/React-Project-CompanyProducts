import React from 'react'
import { Router, Route, Link, withRouter } from 'react-router-dom';

import './styles/Product.css'

import ProductListCategory from '../components/ProductListCategory'

class Products extends React.Component {
    state = {}

    componentDidMount() {
        let url = this.props.location.pathname.substring(10)
        if(!url) {
            url = 'all'
        }

        this.setState({category: url})
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
                        <div className={`product-categories-item selectable-item ${this.state.category === 'all' ? 'product-categories-item-selected' : {}}`}
                            onClick={() => this.handleClick('all')}>
                            <i className='material-icons product-categories-item-icon' id='scr'>list</i>
                            <span>All</span>
                        </div>
                    </div>
                    <div>
                        <div className={`product-categories-item selectable-item ${this.state.category === 'tech' ? 'product-categories-item-selected' : {}}`}
                        onClick={() => this.handleClick('tech')}>
                            <i className='material-icons product-categories-item-icon' id='scr'>laptop</i>
                            <span>Tech</span>
                        </div>
                        <div className={`product-categories-item selectable-item ${this.state.category === 'services' ? 'product-categories-item-selected' : {}}`}
                        onClick={() => this.handleClick('services')}>
                            <i className='material-icons product-categories-item-icon' id='scr'>build</i>
                            <span>Services</span>
                        </div>
                        <div className={`product-categories-item selectable-item ${this.state.category === 'office' ? 'product-categories-item-selected' : {}}`}
                        onClick={() => this.handleClick('office')}>
                            <i className='material-icons product-categories-item-icon' id='scr'>folder</i>
                            <span>Office</span>
                        </div>
                    </div>
                    
                </div>
                <div className='product-category-list'>
                    <ProductListCategory category={this.state.category}/>
                </div>              
            </div>
    )}
}

export default withRouter(Products)
