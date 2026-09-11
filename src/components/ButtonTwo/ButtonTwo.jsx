import React from 'react'
import './ButtonTwo.css'

const ButtonTwo = ({ label, arrow = '→', onClick, ...props }) => {
    return (
        <button className="hero-btn hero-btn-outline" onClick={onClick} {...props}>
            {label} {arrow && <span className="hero-arrow">{arrow}</span>}
        </button>
    )
}

export default ButtonTwo