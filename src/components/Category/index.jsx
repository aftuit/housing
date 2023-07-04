import React from "react";
import { Container, Content } from "./style";
import { CategoryCard } from "../CategoryCard";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { categoryList } from "../../mock/category";

export const Category = () => {

    const settings = {
        className: "center",
        // centerMode: true,
        infinite: true,
        centerPadding: "20",
        slidesToShow: 4,
        speed: 500,
        arrows: true,
        adaptiveHeight: true,
        dots: true,
        appendDots: (dots) => <h1> {dots} </h1>,
    };

    const navigate = useNavigate();

    return (
        <Container>
            <Content>
                <h1 className="title">Category</h1>
                <div className="info">
                    Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
                </div>
            </Content>
            <Slider {...settings}>
                {
                    categoryList.map(item => {
                        return <CategoryCard
                                    key={item.id}
                                    onClick={() => navigate(`/properties?category_id=${item.id}`)}
                                    data={item} />
                    })
                }
            </Slider>
        </Container>
    )
};
