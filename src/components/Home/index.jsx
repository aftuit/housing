import React from 'react'
import { Container } from "./style"
import { Input, Button } from '../Generics'

const Home = () => {
    return (
        <Container>Home 

            <Input width={200} placeholder={"test"}/>
            <Button>Button</Button>
        </Container>
    )
}

export default Home