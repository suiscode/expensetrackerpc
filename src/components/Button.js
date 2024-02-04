import React from 'react'

function Button({label, handleClick, disabled}) {
  return (
    <button className='btn btn-primary disabled:bg-gray-400 text-white w-full rounded-3xl font-normal text-lg' disabled={disabled} onClick={handleClick}>{label}</button>
  )
}

export default Button