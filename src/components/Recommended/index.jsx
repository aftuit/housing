import React, { useEffect, useState, useContext } from "react";
import { Container, Content } from "./style";
import { HouseCard } from "../HouseCard";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import useRequest from "../../hooks/useRequest";
import Loader from "../Loader";
import { Empty } from "antd";

export const Recommended = () => {

    const [loading, setLoading] = useState(true)

    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "20",
        slidesToShow: 3,
        speed: 500,
        arrows: true,
        adaptiveHeight: true,
        dots: true,
        appendDots: (dots) => <h1> {dots} </h1>,
    };
    const [recommendData, setRecommendData] = useState([]);
    const navigate = useNavigate();

    const request = useRequest();

    useEffect(() => {
        request({url: `/v1/houses/list?size=4`})
            .then(res => {
                setRecommendData(res?.data);
            }).finally(() => {
                setLoading(false);
            })
    }, [])

    return (
        <Container>
            <Content>
                <h1 className="title">Recommended</h1>
                <div className="info">
                    Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
                </div>
            </Content>
            {
                loading?
                <Loader/>:
                !loading && recommendData?.length?
                <Slider {...settings}>
                    {
                        recommendData?.map(item => {
                                        return <HouseCard
                                                    gap={10}
                                                    key={item.id}
                                                    onClick={() => navigate(`/properties/${item.id}`)}
                                                    data={item} 
                                                    noLike={true}
                                                    />
                                        })
                    } 

                    
                </Slider>:
                <Empty />
            }
        </Container>
    )
};
