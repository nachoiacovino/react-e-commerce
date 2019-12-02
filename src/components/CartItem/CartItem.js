import React from 'react'
import './CartItem.scss'

const CartItem = ({ item: { imageUrl, price, name, quantity }}) => {
    return (
        <div className="CartItem">
            <img src={imageUrl} alt={name}/>
            <div className="itemDetails">
                <span className="name">{name}</span>
                <span className="price">{quantity} x ${price}</span>
            </div>
        </div>
    )
}

export default CartItem