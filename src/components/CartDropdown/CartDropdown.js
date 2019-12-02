import React from 'react'
import { connect } from 'react-redux'
import './CartDropdown.scss'
import CartItem from '../CartItem/CartItem'
import CustomButton from '../CustomButton/CustomButton'

const CartDropdown = ({ cartItems }) => {
    return (
        <div className="CartDropdown">
            <div className="cartItems">
                {cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)}
            </div>
            <br/>
            <CustomButton>Go to checkout</CustomButton>
        </div>
    )
}

const mapStateToProps = ({ cart: { cartItems }}) => ({ cartItems })

export default connect(mapStateToProps)(CartDropdown)