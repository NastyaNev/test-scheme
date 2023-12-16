import React from 'react';
import "./Button.scss"

function Button({ text, className }) {
  return (
    <button onClick={(e) => {e.preventDefault()}}>{text}</button>
  )
}

export default Button