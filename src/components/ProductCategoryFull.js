import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import './styles/ProductCategoryFull.css'

class ProductCategoryFull extends React.Component {

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

    render() { return (
        <React.Fragment>
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
        </React.Fragment>
    )}
}

export default withRouter(ProductCategoryFull)
