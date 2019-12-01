import React from 'react'
import CollectionItem from '../CollectionItem/CollectionItem'
import './CollectionPreview.scss'

export default function CollectionPreview({ title, items }) {
    return (
        <div className="CollectionPreview">
            <h1 className="title">{title}</h1>
            <div className="preview">
                {items.filter((item, idx) => idx < 4).map(({id, ...props }) =>
                    <CollectionItem key={id} {...props} />
                )}
            </div>
        </div>
    )
}