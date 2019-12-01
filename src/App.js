import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import Shop from './pages/Shop/Shop'
import './App.css'

const App = _ => {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/shop" component={Shop} />
    </Switch>
  )
}

export default App