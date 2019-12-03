import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Collection from '../Collection/Collection'
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview'

const Shop = ({ match }) => {
    return (
        <div className="Shop">
            <Switch>
                <Route exact path={`${match.path}`} component={CollectionsOverview} />
                <Route path={`${match.path}/:collectionId`} component={Collection} />
            </Switch>
        </div>
    )
}

export default Shop