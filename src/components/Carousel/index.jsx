import { React, useRef } from 'react'
import { Carousel } from 'antd'
import { Container, Arrow, Content, Img, Blur } from './style'
import Img1 from "../../assets/img/house1.png";
import Img2 from "../../assets/img/house2.png";

export const GenCarousel = () => {

    const slider = useRef();

    const onMove = (
        {
            target: {
                dataset: { name }
            }
        }
    ) => {
        if (name === "right") slider.current.next();
        if (name === "left") slider.current.prev();
    }

    return (
        <Container>
            <Carousel ref={slider}>
                <div>
                    <Img src={Img1}></Img>
                </div>
                <div>
                    <Img src={Img2}></Img>
                </div>
            </Carousel>

            <Blur />

            <Content>
                <Content.Title>Scyper Pool Partment</Content.Title>
                <Content.SubTitle>Lorem ipsum dolor sit amet.</Content.SubTitle>
                <Content.Price>5,250 / month</Content.Price>
            </Content>

            <Arrow left="true" data-name="left" onClick={onMove} />
            <Arrow right="true" data-name="right" onClick={onMove} />
        </Container>
    )
}
