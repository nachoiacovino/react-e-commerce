import React from 'react'
import './CustomButton.scss'

export default function CustomButton({ children, ...props }) {
    return (
        <div className="CustomButton" {...props}>
            {children}
        </div>
    )
}
