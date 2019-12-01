import React from 'react'
import './FormInput.scss'

export default function FormInput({ handleChange, label, ...props }) {
    return (
        <div className="group">
            <input type="text" className="FormInput" onChange={handleChange} {...props} />
            {
                label &&
                <label className={`FormInput-label ${props.value.length && "shrink"}`}>
                    {label}
                </label>
            }
        </div>
    )
}
