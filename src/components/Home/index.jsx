import React from 'react'
import { Container, Wrapper } from "./style"
import { GenCarousel } from '../Carousel'
import { Category } from '../Category'

const Home = () => {
    return (
        <Container>
            <GenCarousel />
            <Wrapper>
                <Category />
            </Wrapper>
        </Container>
    )
}

export default Home