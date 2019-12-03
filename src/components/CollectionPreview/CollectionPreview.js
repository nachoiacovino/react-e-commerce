import React from 'react'
import { withRouter } from 'react-router-dom'
import CollectionItem from '../CollectionItem/CollectionItem'
import './CollectionPreview.scss'

const CollectionPreview = ({ title, items, history, match, routeName }) => {
    return (
        <div className="CollectionPreview">
            <h1 onClick={() => history.push(`${match.path}/${routeName}`)} className="title">{title} <span className="arrow">&#9655;</span></h1>
            <div className="preview">
                {items.filter((item, idx) => idx < 4).map(item =>
                    <CollectionItem key={item.id} item={item} />
                )}
            </div>
        </div>
    )
}

export default withRouter(CollectionPreview)