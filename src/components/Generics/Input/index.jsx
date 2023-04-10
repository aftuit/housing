import {React, forwardRef} from 'react'
import { Container, Wrapper, Icon } from './style'

export const Input = forwardRef(({
  onChange,
  placeholder,
  value,
  name,
  defaultValue,
  width,
  height,
  icon,
}, ref) => {
  return (
    <Wrapper>
      <Icon>{icon}</Icon>
      <Container
        ref={ref}
        icon={icon}
        onChange={onChange}
        value={value}
        defaultValue={defaultValue}
        name={name}
        placeholder={placeholder}
        width={width}
        height={height}
      />
    </Wrapper>
  )
})

export default Input;
