import { React } from 'react'
import { Button } from '../Generics';
import { Container, Content, Blur, Img } from './style'
import img1 from '../../assets/img/house1.png';
export const Banner = () => {


    return (
        <Container>
            <Img src={img1} />

            <Blur />

            <Content>
                <Content.Title>
                    Vermont Farmhouse With Antique Jail Is the Week's Most Popular Home,
                    the Week's Most Popular Home
                </Content.Title>

                <Button>Read More</Button>
            </Content>

        </Container>
    )
}
