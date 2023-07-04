import styled from "styled-components";
import { ReactComponent as ruler } from "../../assets/icons/ruler.svg";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as bed } from "../../assets/icons/bed.svg";
import { ReactComponent as garage } from "../../assets/icons/car.svg";
import { ReactComponent as love } from "../../assets/icons/love.svg";

export const Container = styled.div`
  border-radius: 3px;
  position: relative;
  width: 100%;
  max-width: 260px;
  min-width: 230px;
  max-height: 380px;
  min-height: 350px;

  margin: auto;
  cursor: pointer;

  filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const Content = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    color: #fff;
    align-items: center;
    justify-content: center;
`

export const Icons = styled.div``;

Icons.Ruler = styled(ruler)``;
Icons.Bath = styled(bath)``;
Icons.Bed = styled(bed)``;
Icons.Garage = styled(garage)``;
Icons.Love = styled(love)`
  cursor: pointer;
  width: 27px;
  height: 27px;
  padding: 6px;
  border-radius: 50%;
  margin-left: 20px;
  background: #f6f8f9;
  :active{
    transform: scale(0.9);
  }
`;

export const Blur = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,0.7);
`