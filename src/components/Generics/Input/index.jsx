import React from 'react'
import { Container } from './style'

export const Input = ({ 
      onChange, 
      placeholder, 
      value, 
      name, 
      defaultValue,
      width,
      height,
    }) => {
  return (
    <Container 
      onChange={onChange} 
      value={value} 
      defaultValue={defaultValue}
      name={name} 
      placeholder={placeholder} 
      width={width}
      height={height}
      />
  )
}

export default Input;
