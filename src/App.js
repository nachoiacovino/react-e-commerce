import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Homepage from './pages/Homepage/Homepage'
import Shop from './pages/Shop/Shop'
import SignIn from './pages/SignIn/SignIn'
import { setCurrentUser } from './redux/user/userActions'

const App = ({ setCurrentUser }) => {
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
  }, [setCurrentUser])

  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop/" component={Shop} />
        <Route exact path="/signin" component={SignIn} />
      </Switch>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({ setCurrentUser: user => dispatch(setCurrentUser(user)) })

export default connect(null, mapDispatchToProps)(App)