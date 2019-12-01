import React from 'react'
import collections from '../../shop.data'
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview'

export default function Shop() {
    console.log(collections)
    return (
        <div className="Shop">
            {collections.map(c => 
                <CollectionPreview key={c.id} {...c} />
            )}
        </div>
    )
}
