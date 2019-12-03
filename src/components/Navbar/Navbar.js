import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'
import './Navbar.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartIcon from '../CartIcon/CartIcon'
import CartDropdown from '../CartDropdown/CartDropdown'
import { selectCartHidden } from '../../redux/cart/cartSelectors'
import { selectCurrentUser } from '../../redux/user/userSelectors'

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

const mapStateToProps = createStructuredSelector({ currentUser: selectCurrentUser, hidden: selectCartHidden })

export default connect(mapStateToProps)(Navbar)

