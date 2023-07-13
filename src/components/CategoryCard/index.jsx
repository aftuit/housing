import { Container, Img, Content, Blur } from "./style";


export const CategoryCard = ({ data = {}, onClick, categoryList, index }) => {

    const { name } = data;

    return (
        <Container
            onClick={onClick}
        >
            <Img src={categoryList[index].bgImg} />
            <Blur />
            <Content>
                <img src={categoryList[index].icn} alt="" />
                {name || "Category"}
            </Content>
        </Container>
    )
}
