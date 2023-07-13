import React, { useEffect, useState } from "react";
import { Container, Content } from "./style";
import { HouseCard } from "../HouseCard";
import { useNavigate } from "react-router-dom";
import { useRequest } from "../../hooks/useRequest"
import Loader from "../Loader";
import { Empty } from "antd";

export const Favourite = () => {

    const request = useRequest();
    const navigate = useNavigate();

    const [favoriteList, setFavoriteList] = useState([])
    const [loading, setLoading] = useState(true)

    const token = localStorage.getItem("token");

    function getFavoriteList() {
        request({
            url: "/v1/houses/getAll/favouriteList",
            token: token
        })
            .then((res) => {
                setFavoriteList(res.data)
            }).finally(() => {
                setLoading(false);
            })
    }

    useEffect(() => {
        token &&
        getFavoriteList();
    }, [])


    return (
        <>
            <Content>
                <h1 className="title">Favourites</h1>
                <div className="info">
                    Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
                </div>
            </Content>
            {
                    loading ?
                        <Loader /> :
                        !loading && favoriteList?.length ?
                        <Container>
                        {   favoriteList.length?
                            favoriteList.map(item => {
                                return <HouseCard
                                    gap={10}
                                    key={item.id}
                                    onClick={() => navigate(`/properties/${item.id}`)}
                                    data={item}
                                    getFavoriteList={getFavoriteList}
                                />
                            }):
                            <h3><i>No data was found</i></h3>
                        }
                    </Container> :
                            <Content>
                                <Empty />
                            </Content>
                }
           

        </>
    )
};

export default Favourite;