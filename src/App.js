import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import Navbar from './components/Navbar/Navbar'
import Homepage from './pages/Homepage/Homepage'
import Shop from './pages/Shop/Shop'
import SignIn from './pages/SignIn/SignIn'
import './App.css'

const App = _ => {
  const [currentUser, setCurrentUser] = useState(null)
 
  useEffect(() => {
    let unsuscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot => setCurrentUser({ id: snapShot.id, ...snapShot.data() }))
      } else setCurrentUser(userAuth)
    })
    return () => {
      unsuscribeFromAuth()
    }
  }, [])

  useEffect(() => {
    console.log(currentUser)
  }, [currentUser])

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