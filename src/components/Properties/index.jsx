import React, { useState, useEffect, useContext } from 'react';
import { Container, Content } from "./style";
import { HouseCard } from '../HouseCard';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { PropertiesContext } from '../../context/properties';
import { WISH_ADD_TYPE } from "../../utils/types";
import useRequest from '../../hooks/useRequest';
import Loader from "../Loader";
import { Empty } from "antd";


const Properties = () => {

    const [{ wishList }, dispatch] = useContext(PropertiesContext)

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true)

    const { search } = useLocation();
    const navigate = useNavigate();
    const request = useRequest();

    useEffect(() => {
        request({ url: `/v1/houses/list${search}` })
            .then((res) => {
                setData(res?.data);
            }).finally(() => {
                setLoading(false);
            });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]);


    const onSelect = (id) => {
        navigate(`/properties/${id}`)
    }

    useEffect(() => {
        getFavoriteList();
    }, [])

    function getFavoriteList() {
        request({
            url: "/v1/houses/getAll/favouriteList",
            token: true
        }).then((res) => {
            dispatch({ type: WISH_ADD_TYPE, payload: { list: [...res.data.map(item => item.id)] } })
        })
    }





    return (
        <>
            <Content>
                <h1 className="title">Properties</h1>
                <div className="info">
                    Volutpat bibendum quis curabitur velit nulla auctor consectetur sit.
                </div>
            </Content>

            {
                loading ?
                    <Loader /> :
                    !loading && data?.length ?
                        <Container>
                            {
                                data ?
                                    data.map((item) => {
                                        return <HouseCard
                                            onClick={() => onSelect(item.id)}
                                            data={item}
                                            key={item.id}
                                            getFavoriteList={getFavoriteList}
                                            wishList={wishList}
                                        />
                                    }) :
                                    <h3><i>No data was found</i></h3>
                            }
                        </Container> :
                        <Content>
                            <Empty />
                        </Content>
            }


        </>
    )
}

export default Properties