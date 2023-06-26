import React from 'react'
import { Container, Wrapper } from "./style"
import { GenCarousel } from '../Carousel'
import { HouseCard } from '../HouseCard'
import { CategoryCard } from '../CategoryCard'

const Home = () => {
    return (
        <Container>
            <GenCarousel />
            <Wrapper>
                <HouseCard />
                <CategoryCard />
            </Wrapper>
        </Container>
    )
}

export default Home