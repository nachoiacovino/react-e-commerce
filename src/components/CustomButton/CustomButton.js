import React from 'react'
import './CustomButton.scss'

export default function CustomButton({ children, isGoogleSignIn, ...props }) {
    return (
        <div className={`CustomButton ${isGoogleSignIn && "googleSignIn"}`} {...props}>
            {children}
        </div>
    )
}
