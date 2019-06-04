import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import './styles/ProductCategoryMin.css'

class ProductCategoryMin extends React.Component {

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
        <div className='product-categories-min-main'>
            <div className='product-categories-min-menu'>
                <Link to='/products/all'
                    className={`product-categories-min-menu-item selectable-item ${this.state.category === 'all' ? 'product-categories-min-menu-item-selected' : ''}`} >
                    <i className='material-icons product-categories-min-menu-icon' id='scr'>list</i>
                </Link>
                <Link to='/products/tech'
                    className={`product-categories-min-menu-item selectable-item ${this.state.category === 'tech' ? 'product-categories-min-menu-item-selected' : ''}`}>
                    <i className='material-icons product-categories-min-menu-icon' id='scr'>laptop</i>
                </Link>
                <Link to='/products/services'
                    className={`product-categories-min-menu-item selectable-item ${this.state.category === 'services' ? 'product-categories-min-menu-item-selected' : ''}`}>
                    <i className='material-icons product-categories-min-menu-icon' id='scr'>build</i>
                </Link>
                <Link to='/products/office'
                    className={`product-categories-min-menu-item selectable-item ${this.state.category === 'office' ? 'product-categories-min-menu-item-selected' : ''}`}>
                    <i className='material-icons product-categories-min-menu-icon' id='scr'>folder</i>
                </Link>
            </div>
        </div>
    )}
}

export default withRouter(ProductCategoryMin)
