import React from 'react'
import './CollectionItem.scss'

export default function CollectionItem({ id, name, price, imageUrl }) {
    return (
        <div className="CollectionItem">
            <div className="CollectionItem-image" style={{ backgroundImage: `url(${imageUrl})`}} />
            <div className="CollectionItem-footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
        </div>
    )
}
