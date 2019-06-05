import React from 'react'
import { withRouter } from 'react-router-dom'

import './styles/ProductListCategory.css'
import api from '../api/api'

import Loader from './Loader'
import ProductCard from './ProductCard'

class ProductListCategory extends React.Component {
    state = {category: null, data: {}, isLoading: true, isCategoryValid: true}

    componentDidMount() {
        this.setCategory(this.props.location)
    }

    componentWillReceiveProps(nextProps) {
        this.setCategory(nextProps.location)
    }

    setCategory(location) {
        let url = location.pathname.substring(10)
        if(!url) {
            url = 'all'
        }

        this.validateLocation(url.toLowerCase())
    }

    validateLocation(category) {
        switch (category) {
            case 'all':
            case 'tech':
            case 'services':
            case 'office':
                this.setState({category, isCategoryValid: true})
                this.fetchData(category)
                break;
        
            default:
                this.setState({category: null, data: {}, isLoading: false, isCategoryValid: false})
                break;
        }
    }

    fetchData = async (category) => {
        let data = {}
        this.setState({data, isLoading: true})

        try {
            data = await api.products.get(category)
            data.products.sort((a, b) => {
                return a.name.localeCompare(b.name)
            })
            this.setState({data, isLoading: false})
        } catch(ex) {
            console.log(ex);
            this.setState({data: { products: [] }, isLoading: false})
        }
    }

    render() {
        if(this.state.isLoading) {
            return (
              <div className='loader'>
                <Loader/>
              </div>
            )
        }

        if(!this.state.isCategoryValid) {
            return (
              <div className='invalid-category'>
                <h1>Ooops!</h1>
                <h2>The Category is invalid, please check your url</h2>
              </div>
            )
        }

        return (
            <React.Fragment>
                <div className='product-list-head'>
                    Showing <b>{this.state.data.totalproducts}</b> products
                    {this.state.category !== 'all' && <React.Fragment> - hidden<b> {this.state.data.hiddenproducts} </b></React.Fragment>}
                </div>
                <div className="product-list">
                    {this.state.data.products.map(product => {
                        return (
                            <div key={product.id} className="product-list-item">
                                <ProductCard product={product}/>
                            </div>
                        )
                    })

                    }
                </div>
            </React.Fragment>
        )
    }
}

export default withRouter(ProductListCategory)
