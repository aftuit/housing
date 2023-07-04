import React from "react";
import { Container, Img, Content, Icons, Details, Divider } from "./style";
import noimg from "../../assets/img/noimg.png";

export const HouseCard = ({ data }) => {


    const { imgPath, country, description, region, houseDetails, expired_price, price } = data;

    return (
        <Container>
            <Img src={imgPath || noimg} />
            <Content>
                <div className="subTitle">
                    {country} - {description.slice(0, 22) + " ..." || "New Apartment nice view"}
                </div>
                <p className="text">
                    {region || "Montserrat"}
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
                        <div className="text">{houseDetails?.room + " room" || " bed"}</div>

                    </Details.Item>
                </Details>
            </Content>
            <Divider />
            <Content footer="true">
                <Details.Item style={{ alignItems: "start" }}>
                    <div className="text expired">{`$${expired_price}/mo`}</div>
                    <div className="subTitle">{`$${price}/mo`}</div>
                </Details.Item>
                <Details.Item footer="true" row="true">
                    <Icons.Resize />
                    <Icons.Love />
                </Details.Item>
            </Content>
        </Container>
    )
}
