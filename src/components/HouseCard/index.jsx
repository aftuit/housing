import { Container, Img, Content, Icons, Details, Divider } from "./style";
import noimg from "../../assets/img/noimg.png";

export const HouseCard = ({ url, title, subtitle, bed, bath, ruler, garage }) => {

    return (
        <Container>
            <Img src={url || noimg} />
            <Content>
                <div className="subTitle">
                    {title || "New Apartment nice view"}
                </div>

                <p className="text">
                    {subtitle || "Montserrat"}
                </p>

                <Details>
                    <Details.Item>
                        <Icons.Garage />
                        <div className="text">{garage || "1 garage"}</div>
                    </Details.Item>
                    <Details.Item>
                        <Icons.Bath />
                        <div className="text">{bath || "1 bath"}</div>

                    </Details.Item>
                    <Details.Item>
                        <Icons.Ruler />
                        <div className="text">{ruler || "1 ruler"}</div>

                    </Details.Item>
                    <Details.Item>
                        <Icons.Bed />
                        <div className="text">{bed || "1 bed"}</div>

                    </Details.Item>
                </Details>

            </Content>
            <Divider />
            <Content footer="true">
                <Details.Item style={{alignItems: "start"}}>
                    <div className="text expired">$2,800/mo</div>
                    <div className="subTitle">$7,500/mo</div>
                </Details.Item>
                <Details.Item footer="true" row="true">
                    <Icons.Resize />
                    <Icons.Love />
                </Details.Item>
            </Content>
        </Container>
    )
}
