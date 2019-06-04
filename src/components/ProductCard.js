import React from 'react'
import { Grid, Cell, Card, CardTitle, CardText } from 'react-md';
import PropTypes from 'prop-types';

import './styles/ProductCard.css'

function ProductCard(props) {
    return (
        <Card className='md-block-centered' key={props.product.id}>
            <CardTitle title={props.product.name} subtitle={`${props.product.categories.join(', ')} - ${props.product.brand}`} />
            <CardText>
                <Grid>
                    <Cell size={4} className="card-image-container">
                        <img className="card-image" src={props.product.photo} alt={props.product.name}/>
                    </Cell>
                    <Cell size={8}>
                        <div className='product-card-detail-info'>
                            <p>{props.product.description}</p>
                            <div><b>Stock:</b> {props.product.stock}</div>
                            <div><b>Price:</b> {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(props.product.price)}</div>
                        </div>
                    </Cell>
                </Grid>
            </CardText>
        </Card>
    )
}

ProductCard.propTypes = {
    product: PropTypes.object.isRequired
}

export default ProductCard
