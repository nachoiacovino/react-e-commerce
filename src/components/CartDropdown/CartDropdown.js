import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'
import './CartDropdown.scss'
import CartItem from '../CartItem/CartItem'
import CustomButton from '../CustomButton/CustomButton'
import { selectCartItems } from '../../redux/cart/cartSelectors'
import { toggleCartHidden } from '../../redux/cart/cartActions'

const CartDropdown = ({ cartItems, history, dispatch }) => {
    const handleClick = _ => {
        history.push('/checkout')
        dispatch(toggleCartHidden())
    }
    
    return (
        <div className="CartDropdown">
            <div className="cartItems">
                {cartItems.length
                    ? cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                    : <span className="empty-message">Your cart is empty</span>
                }
            </div>
            <br/>
            <CustomButton onClick={handleClick}>Go to checkout</CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({ cartItems: selectCartItems })

export default withRouter(connect(mapStateToProps)(CartDropdown))