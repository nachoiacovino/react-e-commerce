import React, { memo } from 'react'
import './CustomButton.scss'

export default memo(function CustomButton({ children, isGoogleSignIn, large, inverted, ...props }) {
    return (
        <button className={`CustomButton ${isGoogleSignIn && "googleSignIn"} ${large && "large"} ${inverted && "inverted"}`} {...props}>
            {children}
        </button>
    )
})
