import React from 'react'
import { Container } from './style'

export const Button = ({ children, typeBtn, onClick, width, height }) => {
    return (
        <Container
            onClick={onClick}
            typeBtn={typeBtn}
            width={width}
            height={height}
        >
            {children || "Generic button"}
        </Container>
    )
}

export default Button;