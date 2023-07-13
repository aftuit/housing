import React from 'react';
import { Container, Wrapper } from "./style";
import { GenCarousel } from '../Carousel';
import { Category } from '../Category';
import { Recommended } from '../Recommended';
import { Why } from '../Why';
import { Banner } from '../Banner';


const Home = () => {
    return (
        <Container>
            <GenCarousel />
            <Wrapper>
                <Recommended />
            </Wrapper>
            <Why />
            <Wrapper>
                <Category />
            </Wrapper>
            <Banner />
        </Container>
    )
}

export default Home