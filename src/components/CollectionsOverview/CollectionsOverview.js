import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import './CollectionsOverview.scss'
import CollectionPreview from '../CollectionPreview/CollectionPreview'
import { selectCollectionsForPreview } from '../../redux/shop/shopSelectors'

const CollectionsOverview = ({ collections }) => {
    return (
        <div className="CollectionsOverview">
            {collections.map(c => 
                <CollectionPreview key={c.id} {...c} />
            )}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({ collections: selectCollectionsForPreview })

export default connect(mapStateToProps)(CollectionsOverview)
