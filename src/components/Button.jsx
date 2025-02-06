import React from 'react'
import "./styles/Button.css"

const Button = ({handleNewQuote}) => {
  return (
    <button className='button' onClick={handleNewQuote}> View other</button>
  )
}

export default Button
