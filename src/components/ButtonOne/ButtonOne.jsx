import React from 'react'
import "./ButtonOne.css"

const ButtonOne = ({ label, onClick }) => {
  return (
    <>
        <button className="hero-btn hero-btn-primary" onClick={onClick}>{label}</button>
    </>
  )
}

export default ButtonOne