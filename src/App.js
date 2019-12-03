import React, { useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Homepage from './pages/Homepage/Homepage'
import Shop from './pages/Shop/Shop'
import SignIn from './pages/SignIn/SignIn'
import { setCurrentUser } from './redux/user/userActions'
import { selectCurrentUser } from './redux/user/userSelectors'

const App = ({ currentUser, setCurrentUser }) => {
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
        <Route path="/shop/" component={Shop} />
        {/* <Route exact path="/signin" component={SignIn} /> */}
        <Route exact path="/signin" render={() => currentUser ? <Redirect to="/" /> : <SignIn />} />
      </Switch>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({ currentUser: selectCurrentUser })
const mapDispatchToProps = dispatch => ({ setCurrentUser: user => dispatch(setCurrentUser(user)) })

export default connect(mapStateToProps, mapDispatchToProps)(App)