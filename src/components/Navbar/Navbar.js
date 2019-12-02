import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import './Navbar.scss'
import CartIcon from '../CartIcon/CartIcon'
import CartDropdown from '../CartDropdown/CartDropdown'

const Navbar = ({ currentUser, hidden }) => {
    return (
        <div className="Navbar">
            <Link to="/" className="logo-container">
                <Logo className="logo" />
            </Link>
            <nav className="Navbar-nav">
                <Link to="/shop" className="Navbar-nav-item">Shop</Link>
                <Link to="/contact" className="Navbar-nav-item">Contact</Link>
                {currentUser ? 
                    <div className="Navbar-nav-item" onClick={() => auth.signOut()}>Sign Out</div> :
                    <Link to="/signin" className="Navbar-nav-item">Sign in</Link>
                }
                <CartIcon />
            </nav>
            {hidden && <CartDropdown />}
            
        </div>
    )
}

// const mapStateToProps = state => ({ currentUser: state.user.currentUser })
const mapStateToProps = ({ user: { currentUser }, cart: { hidden }}) => ({ currentUser, hidden })

export default connect(mapStateToProps)(Navbar)

