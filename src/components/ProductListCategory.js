import React from 'react'
import { withRouter } from 'react-router-dom'

import './styles/ProductListCategory.css'
import api from '../api/api'

import Loader from './Loader'
import ProductCard from './ProductCard'
import ErrorLoadData from './ErrorLoadData'

const PageStatus = {
    isLoading: 'isLoading',
    isCategoryInvalid: 'isCategoryInvalid',
    isError: 'isError',
    isLoaded: 'isLoaded'
  }

class ProductListCategory extends React.Component {
    state = {category: null, data: {}, pagestatus: PageStatus.isLoading}

    componentDidMount() {
        this.setCategory(this.props.match.params.category)
    }

    componentWillReceiveProps(nextProps) {
        this.setCategory(nextProps.match.params.category)
    }

    setCategory(location) {
        if(!location) {
            location = 'all'
        }

        this.validateLocation(location.toLowerCase())
    }

    validateLocation(category) {
        switch (category) {
            case 'all':
            case 'tech':
            case 'services':
            case 'office':
                this.setState({category})
                this.fetchData(category)
                break;
        
            default:
                this.setState({category: null, data: {}, pagestatus: PageStatus.isCategoryInvalid})
                break;
        }
    }

    fetchData = async (category) => {
        let data = {}
        this.setState({data, pagestatus: PageStatus.isLoading})

        try {
            data = await api.products.get(category)

            data.products.sort((a, b) => {
                return a.name.localeCompare(b.name)
            })

            this.setState({data, pagestatus: PageStatus.isLoaded})
        } catch(ex) {
            console.log(ex);
            this.setState({data: { products: [] }, pagestatus: PageStatus.isError})
        }
    }

    render() {
        if(this.state.pagestatus === PageStatus.isLoading) {
            return (
              <div className='loader'>
                <Loader/>
              </div>
            )
        }

        if(this.state.pagestatus === PageStatus.isError) {
            return (
              <ErrorLoadData/>
            )
        }

        if(this.state.pagestatus === PageStatus.isCategoryInvalid) {
            return (
              <div className='invalid-category'>
                <h1>Ooops!</h1>
                <h2>The Category is invalid, please check your url</h2>
              </div>
            )
        }

        return (
            <React.Fragment>
                <section className='product-list-head'>
                    Showing <b>{this.state.data.shownproducts}</b> products
                    {this.state.category !== 'all' && <React.Fragment> - hidden<b> {this.state.data.hiddenproducts} </b></React.Fragment>}
                </section>
                <div className="product-list">
                    {this.state.data.products.map(product => {
                        return (
                            <section key={product.id} className="product-list-item">
                                <ProductCard product={product}/>
                            </section>
                        )
                    })

                    }
                </div>
            </React.Fragment>
        )
    }
}

export default withRouter(ProductListCategory)
