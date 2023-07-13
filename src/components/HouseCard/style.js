import styled from "styled-components";
import { ReactComponent as ruler } from "../../assets/icons/ruler.svg";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as bed } from "../../assets/icons/bed.svg";
import { ReactComponent as garage } from "../../assets/icons/car.svg";
import { ReactComponent as love } from "../../assets/icons/love.svg";
import { ReactComponent as resize } from "../../assets/icons/resize.svg";

export const Container = styled.div`
  width: 100%;
  max-width: ${({ gap }) =>  gap? `350px`: "380px"};
  min-width: 330px;
  margin: ${({ gap }) =>  gap? `0 ${gap}px`: "0px"};
  height: 430px;
  background: white;
  border: 1px solid #e6e9ec;
  :hover {
    filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
      drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
      drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
  }
  cursor: pointer;
`;

export const Img = styled.img`
  width: 100%;
  max-height: 220px;
`;

export const Content = styled.div`
  padding: 16px 20px;
  display: flex;
  flex-direction: ${({ footer }) => (footer ? "row" : "column")};
  justify-content: ${({ footer }) => footer && "space-between"};
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`;
Details.Item = styled.div`
  display: flex;
  flex-direction: ${({ footer }) => (footer ? "row" : "column")};
  justify-content: center;
  align-items: ${({ footer, row }) => (!footer || row)? "center": ""};
`;

export const Icons = styled.div``;

Icons.Ruler = styled(ruler)``;
Icons.Bath = styled(bath)``;
Icons.Bed = styled(bed)``;
Icons.Garage = styled(garage)``;
Icons.Love = styled(love)`
    width: 23px;
    height: 23px;
    padding: 4px;
    background: ${({ favorite }) => (favorite ? "red" : "#f6f8f9")};
    border-radius: 50%;
    margin-left: 20px;
    cursor: pointer;
    & path {
      fill: ${({ favorite }) => favorite ? "white": ""};
    }
    :active {
      transform: scale(0.9);
    }
`;
Icons.Resize = styled(resize)`
  cursor: pointer;
  width: 20px;
  height: 20px;
`;

export const Divider = styled.div`
  background: #e6e9ec;
  height: 2px;
  width: 100%;
`;
