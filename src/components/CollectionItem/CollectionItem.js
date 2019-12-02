import React from 'react'
import { connect } from 'react-redux'
import './CollectionItem.scss'
import CustomButton from '../CustomButton/CustomButton'
import { addItemToCart } from '../../redux/cart/cartActions'

const CollectionItem = ({ item, addItemToCart }) => {
    const { name, price, imageUrl } = item
    return (
        <div className="CollectionItem">
            <div className="CollectionItem-image" style={{ backgroundImage: `url(${imageUrl})`}} />
            <div className="CollectionItem-footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
            <CustomButton onClick={() => addItemToCart(item)} inverted>Add to cart</CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({ addItemToCart: item => dispatch(addItemToCart(item)) })

export default connect(null, mapDispatchToProps)(CollectionItem)
