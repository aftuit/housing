import React from "react";
import { Container, Img, Content, Icons, Details, Divider } from "./style";
import noimg from "../../assets/img/noimg.png";
import useRequest from "../../hooks/useRequest";
export const HouseCard = ({ data, gap, onClick, getFavoriteList, wishList = [] }) => {

    const { 
        id,
        favorite = wishList?.includes(Number(data.id)), 
        category, 
        attachments, 
        city, 
        country, 
        description, 
        region, 
        houseDetails, 
        salePrice, 
        price 
    } = data;

    const request = useRequest();
  
    const likeDislike = (id, favorite) => {
        request({
            url: `/v1/houses/addFavourite/${id}?favourite=${!favorite}`,
            token: true,
            method: "PUT",
        })
            .then(() => {
                getFavoriteList();
        })
    }

    return (
        <Container gap={gap}>
            <Img src={attachments?.[0].imgPath || noimg} />
            <Content>
                <div className="subTitle">
                    {country} - {description.slice(0, 18) + " ..." || "New Apartment nice view"}
                </div>
                <p className="text">
                {category.name} - {region || "Montserrat"}, {city}
                </p>
                <Details>
                    <Details.Item>
                        <Icons.Garage />
                        <div className="text">{houseDetails?.garage + " garage" || " garage"}</div>
                    </Details.Item>
                    <Details.Item>
                        <Icons.Bath />
                        <div className="text">{houseDetails?.bath + " bath" || " bath"}</div>

                    </Details.Item>
                    <Details.Item>
                        <Icons.Ruler />
                        <div className="text">{houseDetails?.area + " area" || " area"}</div>

                    </Details.Item>
                    <Details.Item>
                        <Icons.Bed />
                        <div className="text">{houseDetails?.beds + " beds" || " beds"}</div>

                    </Details.Item>
                </Details>
            </Content>
            <Divider />
            <Content footer="true">
                <Details.Item style={{ alignItems: "start" }}>
                    <div className="text expired">{`$${price}/mo`}</div>
                    <div className="subTitle">{`$${salePrice}/mo`}</div>
                </Details.Item>
                <Details.Item footer="true" row="true">
                    <Icons.Resize onClick={onClick}/>
                    <Icons.Love favorite={favorite? 1: 0} onClick={() => likeDislike(id, favorite)}/>
                </Details.Item>
            </Content>
        </Container>
    )
}

export default HouseCard