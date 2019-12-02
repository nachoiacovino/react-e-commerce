import React from 'react'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'
import useInputState from '../../hooks/useInputState'
import './Register.scss'
import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton'

export default function Register() {
    const [displayName, setDisplayName, resetDisplayName] = useInputState("")
    const [email, setEmail, resetEmail] = useInputState("")
    const [password, setPassword, resetPassword] = useInputState("")
    const [confirmPassword, setConfirmPassword, resetConfirmPassword] = useInputState("")

    const handleSubmit = async e => {
        e.preventDefault()

        console.log("helloooo")

        if (password !== confirmPassword) {
            alert("Password don't match")
            return
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user, { displayName })
            resetDisplayName()
            resetEmail()
            resetPassword()
            resetConfirmPassword()

        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="Register">
            <h2 className="title">I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Name" type="text" name="name" value={displayName} handleChange={setDisplayName} required />
                <FormInput label="Email" type="email" name="email" value={email} handleChange={setEmail} required />
                <FormInput label="Password" type="password" name="password" value={password} handleChange={setPassword} required />
                <FormInput label="Confirm password" type="password" name="confirmPassword" value={confirmPassword} handleChange={setConfirmPassword} required />
                <CustomButton type="submit" large>Sign up</CustomButton>
            </form>
        </div>
    )
}
