import styled from "styled-components";
import { ReactComponent as share } from "../../assets/icons/share.svg";
import { ReactComponent as love } from "../../assets/icons/love.svg";
import { ReactComponent as bed } from "../../assets/icons/bed.svg";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as garage } from "../../assets/icons/car.svg";
import { ReactComponent as ruler } from "../../assets/icons/ruler.svg";
import { ReactComponent as resize } from "../../assets/icons/resize.svg";
import { ReactComponent as arrow } from "../../assets/icons/arrow.svg";
import { Image } from "antd";

const Container = styled.div`
  display: flex;
  flex: ${({ flex }) => flex};
  flex-direction: column;
  gap: ${({ gap }) => `${gap}px`};
  ~ .user {
    background: #ffff;
    border: 1px solid #e6e9ec;
    border-radius: 3px;
    margin-left: 30px;
    padding: 24px;
    gap: 24px;
    height: fit-content;
  }
`;

const Wrapper = styled.div`
  max-width: var(--width);
  padding: 48px 130px;
  width: 100%;
  margin: auto;
  display: flex;
//   justify-content: space-around;
  box-sizing: border-box;
`;

const Section = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Content = styled.div`
  display: flex;

  align-items: ${({ flex }) => flex && "center"};
  justify-content: ${({ flex }) => !flex && "center"};
  flex-direction: ${({ flex }) => !flex && "column"};
  /* border: 1px solid red; */
`;

Content.Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: ${({ large }) => (large ? "24px" : "18px")};
  line-height: 32px;

  letter-spacing: -0.02em;
  color: #0d263b;

  margin-top: ${({ mt }) => `${mt}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  margin: 32px 0;
`;

Details.Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
  margin: 0 24px 0 8px;
`;

const Icons = styled.div``;
Icons.Arrow = styled(arrow)`
display: inline-block;
width: 15px;
height: 15px;
margin-left: 5px;
& path {
  fill: gray
};
}
`;
Icons.ArrowLess = styled(arrow)`
display: inline-block;
width: 15px;
height: 15px;
margin-left: 5px;
transform: rotate(180deg);
& path {
  fill: gray
};
}
`;

Icons.Share = styled(share)`
display: inline-block;
width: 30px;
height: 30px;
margin: 0px 10px 0px 26px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }
`;
Icons.Love = styled(love)`
  display: inline-block;
    padding: 5px;
    box-sizing: border-box;
    border-radius: 50%;
  width: 35px;
  height: 35px;
  margin: 0 10px 0 26px;
  cursor: pointer;
  background: ${({ favorite }) => (favorite ? "red" : "#f6f8f9")};
& path {
      fill: ${({ favorite }) => favorite ? "white": ""};
    }
  :active {
    transform: scale(0.9);
  }
`;

Icons.Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
`;

Icons.Bed = styled(bed)``;
Icons.Bath = styled(bath)``;
Icons.Garage = styled(garage)``;
Icons.Ruler = styled(ruler)``;
Icons.Resize = styled(resize)``;

const Description = styled.div`
  margin-top: 16px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%);
`;
const DescWrapper = styled.div`
  margin-top: 16px;
  position: relative;
  height: fit-content;
`;




const User = styled.div``;

User.Img = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  margin-right: 10px;
`;



const ImageWrapper = styled.div`
  margin-bottom: 50px;
  height: fit-content;
  width: 100%;
`;
const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
  height: 300px;
`;

const ImgContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: ${({wth}) => `${wth}%`};
  height: ${({hgt}) => hgt? "fit-content": "300px"};
  box-sizing: border-box;
`;

const Box = styled.div`
  width: ${({wth}) => wth? `${wth}%`: 0};
  height: ${({hgt}) => hgt? `${hgt}%`: 0};
  box-sizing: border-box;
  border: 2px solid #fff;
  padding: 3px;
`
const ImageAnt = styled(Image)`
  width: 100%;
  height: 100% !important;
`
const ShowMore = styled.div`
cursor: pointer;
display: flex !important;
align-items: center;
justify-content: end;
`


export {
  ShowMore,
  ImgContainer,
  ImageWrapper,
  Container,
  Wrapper,
  Content,
  Section,
  Icons,
  Details,
  Description,
  User,
  ImageContainer,
  DescWrapper,
  ImageAnt,
  Box,
};