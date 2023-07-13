import React, { useContext, useEffect, useState } from "react";
import { Checkbox, message } from "antd";
import { useParams } from "react-router-dom";
import { Input, Button } from "../Generics";
import { YandexMap } from "../Generics/YandexMap";
import nouser from "../../assets/img/nouser.jpeg";
import { Recommended } from "../Recommended";
import { WISH_REMOVE_TYPE, WISH_ADD_TYPE } from "../../utils/types";
import useRequest from "../../hooks/useRequest";
import { PropertiesContext } from "../../context/properties";
import {
    Box,
    Container,
    Content,
    Description,
    Details,
    Icons,
    ImageWrapper,
    ImageContainer,
    ImgContainer,
    Section,
    User,
    Wrapper,
    DescWrapper,
    ImageAnt,
    ShowMore,
} from "./style";

export const SingleItem = () => {

    const [singleItem, setSingleItem] = useState({})

    const { id } = useParams();
    const [{ wishList }, dispatch] = useContext(PropertiesContext)

    const [isShow, setisShow] = useState(false);

    const [contentWth, setContentWth] = useState(100);
    const [devide, setDevide] = useState(1);
    const [length, setLength] = useState(1);

    function checkWidth(length) {
        if (length === 1) {
            setContentWth(100);
            setDevide(1);
        } else if (length > 1 && length !== 4) {
            setContentWth(50);
            if (length === 2) {
                setDevide(1);
            } else if (length > 2) {
                setDevide(2);
            }
        } else if (length === 4) {
            setContentWth(75);
            setDevide(3);
        }
    }

    const request = useRequest();

    const favorite = wishList.some(vl => vl === singleItem?.id) ? 1 : 0;

    useEffect(() => {
        request({
            url: `/v1/houses/id/${id}`
        }).then((res) => {
            setLength(res.data.attachments.length);
            checkWidth(res.data.attachments.length);
            setSingleItem(res.data)
        })
    }, [])

    const addRemoveLiked = (id, favorite) => {
        request({
            url: `/v1/houses/addFavourite/${id}?favourite=${!favorite}`,
            token: true,
            method: "PUT",
        }).then(res => {
            favorite ?
                dispatch({ type: WISH_REMOVE_TYPE, payload: { list: wishList.filter(vl => vl !== res.data.id) } }) :
                dispatch({ type: WISH_ADD_TYPE, payload: { list: [...wishList, res?.data.id] } })
        })
    }

    function shareItem(data) {
        navigator.clipboard.writeText(`
            Modern Housing WebSite.
            ${data.name.toUpperCase()} - ${data.description}.
            visit our website and choice your dream house
            ${window.location.href}
        `)
        message.warning("Information copied to clipboard!");
    }
    return (
        <React.Fragment>

            <Wrapper>
                <Container flex={2.5}>
                    <ImageWrapper>
                        <ImageContainer>
                            <ImgContainer wth={contentWth}>
                                <Box wth={100} hgt={100}>
                                    <ImageAnt src={singleItem?.attachments?.[0]?.imgPath} />
                                </Box>
                            </ImgContainer>
                            <ImgContainer wth={100 - contentWth}>
                                {
                                    singleItem?.attachments?.map((vl, ind) => {
                                        if (ind > 0 && ind < 5)
                                            return <Box wth={length > 4 ? 50 : 100} hgt={100 / devide} key={vl.id?? vl.imgPath}>
                                                <ImageAnt src={vl.imgPath} />
                                            </Box>
                                    }
                                    )
                                }

                            </ImgContainer>
                        </ImageContainer>
                        {
                            isShow &&
                            <ImgContainer wth={100} hgt={1}>
                                {
                                   singleItem?.attachments?.map((vl, ind) => {
                                    if (ind > 4)
                                        return <Box wth={25} hgt={25} key={vl.id?? vl.imgPath}>
                                            <ImageAnt src={vl.imgPath} />
                                        </Box>
                                }
                                )
                                }
                            </ImgContainer>
                        }
                        {
                            length > 5 &&
                            <ShowMore onClick={() => setisShow(!isShow)}>
                                {
                                    isShow? <>Show Less <Icons.ArrowLess></Icons.ArrowLess> </> :
                                    <>Show More <Icons.Arrow></Icons.Arrow> </>
                                }
                            </ShowMore>
                        }
                    </ImageWrapper>
                    <Section>
                        <Content>
                            <Content.Title large>{singleItem?.name}</Content.Title>
                            <div className="info">
                                {singleItem?.city},  {singleItem?.region},  {singleItem?.country}
                            </div>
                        </Content>
                        <Content flex>
                            <Icons.Share onClick={(() => shareItem(singleItem))} />
                            <Icons.Title>Share</Icons.Title>
                            <Icons.Love
                                onClick={() => addRemoveLiked(singleItem?.id, favorite)}
                                favorite={favorite}
                            />
                            <Icons.Title>Save</Icons.Title>
                        </Content>
                    </Section>
                    <Section>
                        <Details>
                            <Icons.Bed />
                            <Details.Title>Bed {singleItem?.houseDetails?.room || 0}</Details.Title>
                            <Icons.Bath />
                            <Details.Title>
                                Bath {singleItem?.houseDetails?.bath || 0}
                            </Details.Title>
                            <Icons.Garage />
                            <Details.Title>
                                Garage {singleItem?.houseDetails?.garage || 0}{" "}
                            </Details.Title>
                            <Icons.Ruler />
                            <Details.Title>
                                Area {singleItem?.houseDetails?.area || 0} kv
                            </Details.Title>
                        </Details>
                        <Content>
                            <Content flex>
                                <del>
                                    <Details.Title>${singleItem?.price || 0}/mo</Details.Title>
                                </del>
                                <h2 className="title"> ${singleItem?.salePrice || 0}/mo</h2>
                            </Content>
                            <div style={{ textAlign: "end" }} className="info">
                                {singleItem?.category?.name ?? "category"}
                            </div>
                        </Content>
                    </Section>
                    <DescWrapper>
                        <Content.Title>Description</Content.Title>
                        {
                            singleItem?.description?.split("*").map((item, index) => {
                                return <Description key={item}>{item}</Description>
                            })
                        }
                    </DescWrapper>
                    <Content.Title mt={25}>{singleItem?.houseComponents?.additional}</Content.Title>
                    <Section>
                        <Container gap={25}>
                            <Content flex>
                                <Icons.Bed />
                                <Details.Title>
                                    Air Conditioning {singleItem?.houseDetails?.beds || 0}
                                </Details.Title>
                            </Content>
                            <Content flex>
                                <Icons.Garage />
                                <Details.Title>
                                    Barbeque {singleItem?.houseDetails?.beds || 0}
                                </Details.Title>
                            </Content>
                            <Content flex>
                                <Icons.Bed />
                                <Details.Title>
                                    Dryer {singleItem?.houseDetails?.beds || 0}
                                </Details.Title>
                            </Content>
                            <Content flex>
                                <Icons.Ruler />
                                <Details.Title>
                                    Gym {singleItem?.houseDetails?.beds || 0}
                                </Details.Title>
                            </Content>
                        </Container>
                        <Section>
                            <Container gap={25}>
                                <Content flex>
                                    <Icons.Bed />
                                    <Details.Title>
                                        Air Conditioning {singleItem?.houseDetails?.beds || 0}
                                    </Details.Title>
                                </Content>
                                <Content flex>
                                    <Icons.Garage />
                                    <Details.Title>
                                        Barbeque {singleItem?.houseDetails?.beds || 0}
                                    </Details.Title>
                                </Content>
                                <Content flex>
                                    <Icons.Bed />
                                    <Details.Title>
                                        Dryer {singleItem?.houseDetails?.beds || 0}
                                    </Details.Title>
                                </Content>
                                <Content flex>
                                    <Icons.Ruler />
                                    <Details.Title>
                                        Gym {singleItem?.houseDetails?.beds || 0}
                                    </Details.Title>
                                </Content>
                            </Container>
                        </Section>
                        <Section>
                            <Container gap={25}>
                                <Content flex>
                                    <Icons.Bed />
                                    <Details.Title>
                                        Air Conditioning {singleItem?.houseDetails?.beds || 0}
                                    </Details.Title>
                                </Content>
                                <Content flex>
                                    <Icons.Garage />
                                    <Details.Title>
                                        Barbeque {singleItem?.houseDetails?.beds || 0}
                                    </Details.Title>
                                </Content>
                                <Content flex>
                                    <Icons.Bed />
                                    <Details.Title>
                                        Dryer {singleItem?.houseDetails?.beds || 0}
                                    </Details.Title>
                                </Content>
                                <Content flex>
                                    <Icons.Ruler />
                                    <Details.Title>
                                        Gym {singleItem?.houseDetails?.beds || 0}
                                    </Details.Title>
                                </Content>
                            </Container>
                        </Section>
                        <Section>
                            <Container gap={25}>
                                <Content flex>
                                    <Icons.Bed />
                                    <Details.Title>
                                        Air Conditioning {singleItem?.houseDetails?.beds || 0}
                                    </Details.Title>
                                </Content>
                                <Content flex>
                                    <Icons.Garage />
                                    <Details.Title>
                                        Barbeque {singleItem?.houseDetails?.beds || 0}
                                    </Details.Title>
                                </Content>
                                <Content flex>
                                    <Icons.Bed />
                                    <Details.Title>
                                        Dryer {singleItem?.houseDetails?.beds || 0}
                                    </Details.Title>
                                </Content>
                                <Content flex>
                                    <Icons.Ruler />
                                    <Details.Title>
                                        Gym {singleItem?.houseDetails?.beds || 0}
                                    </Details.Title>
                                </Content>
                            </Container>
                        </Section>
                    </Section>
                </Container>
                <Container className="user" flex={1}>
                    <Section style={{ justifyContent: "flex-start" }}>
                        <User.Img src={nouser} alt="user image" />
                        <Content>
                            <div className="subTitle">{singleItem?.user?.firstname} {singleItem?.user?.lastname}</div>
                            <div className="info">{singleItem?.user?.email}</div>
                        </Content>
                    </Section>
                    <Input placeholder="Name" />
                    <Input placeholder="Phone" />
                    <Input placeholder="Email" />
                    <Input placeholder="Message" />
                    <Checkbox>By submitting this form I agree to Terms of Use</Checkbox>
                    <Button width={"%"}>Send request</Button>
                </Container>
            </Wrapper>
            <YandexMap longitude={singleItem?.location?.longitude}
                latitude={singleItem?.location?.latitude} />
            <Wrapper>
                <Recommended />
            </Wrapper>
        </React.Fragment>
    )
}

export default SingleItem;