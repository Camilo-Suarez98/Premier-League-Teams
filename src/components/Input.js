import React from 'react'

export const Input = ({ type, placeholder, onChange, className }) => {
  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}
