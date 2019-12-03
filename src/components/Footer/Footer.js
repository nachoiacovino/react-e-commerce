import React from 'react'
import './Footer.scss'

const Footer = () => {
    return (
        <div className="Footer">
            <div className="Footer-container">
                <span>Demo Website made by Ignacio Iacovino.</span>
                <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/ignacio-iacovino/"> LinkedIn Profile.</a> 
                <span> &copy; {new Date().getFullYear()}</span>
            </div>
        </div>
    )
}

export default Footer
