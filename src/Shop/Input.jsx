import React from 'react'

function Input({label, id, ...props}) {
  return (
    <p>
        <label htmlFor={id}>{label}</label>
        <input type="text" name={id} id={id} required {...props}/>
    </p>
  )
}

export default Input