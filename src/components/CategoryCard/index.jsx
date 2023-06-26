import { Container, Img, Content, Icons, Blur } from "./style";
import category_img from "../../assets/img/category.png";

export const CategoryCard = ({ data = {} }) => {

    const { name } = data;

    return (
        <Container>
            <Img src={ category_img} />
            <Blur/>
            <Content>
                {name || "Category"}
            </Content>
        </Container>
    )
}
