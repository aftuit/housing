import React from 'react';
import { Container } from './style';

export const Button = ({ children, typeBtn, onClick, width, height, isLoading, htmlType="button", txt }) => {
    return (
        <Container
            onClick={onClick}
            typeBtn={typeBtn}
            width={width}
            height={height}
            loading={isLoading}
            htmlType={htmlType}
            txt={txt}
        >
            {children || "Generic button"}
        </Container>
    )
}

export default Button;