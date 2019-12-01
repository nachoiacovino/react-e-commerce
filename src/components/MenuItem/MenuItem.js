import React from 'react'
import './MenuItem.scss'

export default function MenuItem({ title, imageUrl, size }) {
    return (
        <div className={`MenuItem ${size}`}>
            <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>  
    )
}
