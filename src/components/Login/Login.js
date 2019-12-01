import React from 'react'
import useInputState from '../../hooks/useInputState'
import './Login.scss'
import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton'

export default function Login() {
    const [email, setEmail, resetEmail] = useInputState("")
    const [password, setPassword, resetPassword] = useInputState("")
    
    const handleSubmit = e => {
        e.preventDefault()
        resetEmail()
        resetPassword()
    }

    return (
        <div className="Login">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" type="email" name="email" value={email} handleChange={setEmail} required />
                <FormInput label="Password" type="password" name="password" value={password} handleChange={setPassword} required />
                <CustomButton type="submit">Sign in</CustomButton>
            </form>
        </div>
    )
}
