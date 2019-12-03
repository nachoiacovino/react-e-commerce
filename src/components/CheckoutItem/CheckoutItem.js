import React from 'react'
import { connect } from 'react-redux'
import './CheckoutItem.scss'
import { clearItemFromCart, addItemToCart, removeItemFromCart } from '../../redux/cart/cartActions'

const CheckoutItem = ({ cartItem, clearItem, addItemToCart, removeItemFromCart }) => {
    const { name, imageUrl, price, quantity } = cartItem
    return (
        <div className="CheckoutItem">
            <div className="image-container">
                <img src={imageUrl} alt={name} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div onClick={() => removeItemFromCart(cartItem)} className="arrow">&#10094;</div>
                <span className="value">{quantity}</span>
                <div onClick={() => addItemToCart(cartItem)} className="arrow">&#10095;</div>
            </span>
            <span className="price">${price}</span>
            <div className="remove-button" onClick={() => clearItem(cartItem)}>&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({ 
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItemToCart: item => dispatch(addItemToCart(item)),
    removeItemFromCart: item => dispatch(removeItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
