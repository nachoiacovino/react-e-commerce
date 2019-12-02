import React from 'react'
import './SignIn.scss'
import Login from '../../components/Login/Login'
import Register from '../../components/Register/Register'

export default function SignIn() {
    return (
        <div className="SignIn">
            <Login />
            <Register />
        </div>
    )
}
