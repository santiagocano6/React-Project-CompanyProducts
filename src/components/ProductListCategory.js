import React from 'react'

import './styles/ProductListCategory.css'
import api from '../api/api'

import Loader from './Loader'
import ProductCard from './ProductCard'

class ProductListCategory extends React.Component {
    state = {data: {}, isLoading: true, isCategoryValid: true}

    componentWillReceiveProps(nextProps) {
        switch (nextProps.category) {
            case 'all':
            case 'tech':
            case 'services':
            case 'office':
                this.setState({isCategoryValid: true})
                this.fetchData()
                break;
        
            default:
                this.setState({data: {}, isLoading: false, isCategoryValid: false})
                break;
        }
    }

    fetchData = async () => {
        let data = {}
        this.setState({data, isLoading: true})

        try
        {
            data = await api.products.get(this.props.category)
            
            if(data) {
                data.products.sort((a, b) => {return a.name.localeCompare(b.name)})
            }
        }
        catch(ex)
        {
            console.log(ex);
        }
    
        this.setState({data, isLoading: false})
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
                    Showing <b>{this.state.data.info.totalproducts}</b> products
                    {this.props.category !== 'all' && <React.Fragment> - hidden<b> {this.state.data.info.hiddenproducts} </b></React.Fragment>}
                    <b>- TMP TO REMOVE, Current Category: {this.props.category} </b>
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

export default ProductListCategory
