import React from 'react';
import { Container, Wrapper } from "./style";
import { GenCarousel } from '../Carousel';
import { Category } from '../Category';
import { Recommended } from '../Recommended';
import { Why } from '../Why';
import { Banner } from '../Banner';
import { Loader } from '../Loader';
// import { Recent } from '../Recent';


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
            {/* <Recent/> */}
        </Container>
    )
}

export default Home