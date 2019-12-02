import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { auth } from './firebase/firebase.utils'
import Navbar from './components/Navbar/Navbar'
import Homepage from './pages/Homepage/Homepage'
import Shop from './pages/Shop/Shop'
import SignIn from './pages/SignIn/SignIn'
import './App.css'

const App = _ => {
  const [currentUser, setCurrentUser] = useState(null)
 
  useEffect(() => {
    let unsuscribeFromAuth = auth.onAuthStateChanged(user => setCurrentUser(user))
    return () => {
      unsuscribeFromAuth()
    }
  }, [])

  console.log(currentUser)
  return (
    <div>
      <Navbar currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/signin" component={SignIn} />
      </Switch>
    </div>
  )
}

export default App