import React, { useEffect, useState } from "react";
import { Container, Content } from "./style";
import { CategoryCard } from "../CategoryCard";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { categoryList } from "../../mock/category";
import useRequest from "../../hooks/useRequest";
import villa from "../../assets/icons/carouselVilla.svg"
import dom from "../../assets/icons/carouselHome.svg"
import cottage from "../../assets/icons/carouselBusinessTrade.svg"
import office from "../../assets/icons/CarouselLivingRoom.svg"
import menur from "../../assets/icons/carouselHome.svg"
import Loader from "../Loader";
import { Empty } from "antd";

export const Category = () => {

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true)
    const settings = {
        className: "center",
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

    const request = useRequest();

    const categoryList = [
        {
            bgImg: "https://mediacdn.cincopa.com/BuildingD-ALBERTANDVERALISTACADEMICCENTER.jpg?o=4&res=10053&p=y&pid=661629&ph4=qtwCAIVAnDQ75A",
            icn: villa,
        },
        {
            bgImg: "https://i.guim.co.uk/img/media/bcfb1e266224a19df7bb6724c309436f3062e88a/0_40_1024_614/master/1024.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=ad84beb231bf5c6b6b2e5dd65a2ec3e6",
            icn: cottage,
        },
        {
            bgImg: "https://qph.cf2.quoracdn.net/main-qimg-6fd45c7eb397be4b9d73b199a50a80cc.webp",
            icn: dom,
        },
        {
            bgImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsq-lx_d3Gu_pZQaFcjsVlEYvG9kq1Sva3l17CHAahO7xkoNKdV1r2lGwf0LUKFpYdJ00&usqp=CAU",
            icn: office,
        },
        {
            bgImg: "https://preview.redd.it/410mw81y6d481.jpg?width=640&crop=smart&auto=webp&s=c53ea89b068ddf78e472b5fea2e9753adfcbdf1b",
            icn: menur,
        },
    ]

    useEffect(() => {
        request({url: `/v1/categories/list`})
            .then(res => {
                setCategories(res.data)
            }).finally(() => {
                setLoading(false);
            })
    }, [])

    return (
        <Container>
            <Content>
                <h1 className="title">Category</h1>
                <div className="info">
                    Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
                </div>
            </Content>
            
            {
                loading?
                <Loader/>:
                !loading && categories?.length?
                <Slider {...settings}>
                {
                    categories?.map((item, index) => {
                        return <CategoryCard
                                    key={item.id}
                                    onClick={() => navigate(`/properties?category_id=${item.id}`)}
                                    data={item} 
                                    categoryList={categoryList}
                                    index={index}
                                    />
                    })
                }
            </Slider>:
                <Empty />
            }
        </Container>
    )
};
