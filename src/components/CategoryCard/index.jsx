import { Container, Img, Content, Blur } from "./style";
import icon from "../../assets/icons/carouselVilla.svg";

export const CategoryCard = ({ data = {}, onClick }) => {

    const { bgImg, name } = data;

    return (
        <Container
            onClick={onClick}
        >
            <Img src={bgImg} />
            <Blur />
            <Content>
                <img src={icon} alt="" />
                {name || "Category"}
            </Content>
        </Container>
    )
}
