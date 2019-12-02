import React from 'react'
import { connect } from 'react-redux'
import './CartIcon.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { toggleCartHidden } from '../../redux/cart/cartActions'

const CartIcon = ({ toggleCartHidden }) => {
    return (
        <div className="CartIcon" onClick={toggleCartHidden}>
            <ShoppingIcon className="ShoppingIcon" />
            <span className="itemCount">0</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({ toggleCartHidden: () => dispatch(toggleCartHidden())})

export default connect(null, mapDispatchToProps)(CartIcon)