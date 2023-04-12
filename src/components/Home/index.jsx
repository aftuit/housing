import React from 'react'
import { Container } from "./style"
import { Input, Button } from '../Generics'
import { GenCarousel } from '../Carousel'
import { HouseCard } from '../HouseCard'

const Home = () => {
    return (
        <Container>Home 
            <GenCarousel />

            <HouseCard />

            <Input width={200} placeholder={"test"}/>
            <Button>Button</Button>
        </Container>
    )
}

export default Home