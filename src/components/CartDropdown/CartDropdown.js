import React from 'react'
import './CartDropdown.scss'
import CustomButton from '../CustomButton/CustomButton'

export default function CartDropdown() {
    return (
        <div className="CartDropdown">
            <div className="cartItems"></div>
            <CustomButton>Go to checkout</CustomButton>
        </div>
    )
}
