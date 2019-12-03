import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview'
import { selectShopCollections } from '../../redux/shop/shopSelectors'

const Shop = ({ collections }) => {
    return (
        <div className="Shop">
            {collections.map(c => 
                <CollectionPreview key={c.id} {...c} />
            )}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({ collections: selectShopCollections })

export default connect(mapStateToProps)(Shop)