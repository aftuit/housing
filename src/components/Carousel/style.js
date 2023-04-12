import styled from "styled-components";
import {ReactComponent as arrow} from "../../assets/icons/arrow.svg"
export const Container = styled.div`
    position: relative;
    /* border: 1px solid red; */
`

export const Arrow = styled(arrow)`
    height: 25px;
    width: 25px;
    padding: 18px;
    border-radius: 50%;
    background: rgba(255,255,255,0.2);
    position: absolute;
    top: 50%;
    z-index: 12;
    transform: ${({left}) => (left? 'rotate(90deg)': 'rotate(-90deg)') };
    left: ${({left}) => (left && '4%') };
    right: ${({right}) => (right && '4%') };
    cursor: pointer;
    transition: all linear 0.15s;
    :hover{
        background: rgba(255,255,255,0.3);
    }
`

export const Img = styled.img`
    width: 100%;
      /* height: 100%; */

`

export const Blur = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,0.4);
`

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

Content.Title = styled.h1`
    color: #fff;
    font-style: normal;
    font-weight: 700;
    font-size: 44px;
    line-height: 48px;
    letter-spacing: -0.02em;
`
Content.SubTitle = styled.p`
    color: inherit;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
`

Content.Price = styled.p`
    color: inherit;
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 36px;
`
