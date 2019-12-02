import React, { memo } from 'react'
import './CustomButton.scss'

export default memo(function CustomButton({ children, isGoogleSignIn, large, ...props }) {
    console.log(props)
    return (
        <button className={`CustomButton ${isGoogleSignIn && "googleSignIn"} ${large && "large"}`} {...props}>
            {children}
        </button>
    )
})
