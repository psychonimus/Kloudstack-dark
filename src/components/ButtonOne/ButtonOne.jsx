import React from 'react'
import "./ButtonOne.css"

const ButtonOne = ({label}) => {
  return (
    <>
        <button className="hero-btn hero-btn-primary">{label}</button>
    </>
  )
}

export default ButtonOne