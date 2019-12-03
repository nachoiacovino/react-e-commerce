import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import './CartIcon.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { toggleCartHidden } from '../../redux/cart/cartActions'
import { selectCartItemsCount } from '../../redux/cart/cartSelectors'

const CartIcon = ({ itemCount, toggleCartHidden }) => {
    return (
        <div className="CartIcon" onClick={toggleCartHidden}>
            <ShoppingIcon className="ShoppingIcon" />
            <span className="itemCount">{itemCount}</span>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({ itemCount: selectCartItemsCount })
const mapDispatchToProps = dispatch => ({ toggleCartHidden: () => dispatch(toggleCartHidden())})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)