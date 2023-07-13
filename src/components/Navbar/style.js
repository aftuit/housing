import styled from "styled-components";
import {ReactComponent as logoImg} from "../../assets/icons/logo.svg"
import { NavLink } from "react-router-dom";


const Container = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
`;

const Main = styled.div`
  background: var(--colorPrimary);
  display: flex;
  justify-content: center;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  padding: var(--padding);
  height: 64px;
  font-size: 16px; 
  width: 100%;
  max-width: 1440px;
`;

const Section = styled.div`
display: flex;
align-items: center;
cursor: ${({logo}) => logo && "pointer"};

.active{
    color: #fff;

}

`
const Logo = styled(logoImg)`
width: 36px;
height: 36px;
margin-right: 12px;
& path{
    fill: #fff;
}
`

const Link = styled(NavLink)`
text-decoration: none;
margin: 0 32px;
color: rgba(255,255,255,0.8);
`

const Menu = styled.div`
  width: 177px;
  display: flex;
  flex-direction: column;
  background: #ffffff;

  border-radius: 5px;
  box-shadow: 0px 20px 38px rgba(0, 0, 0, 0.06),
    0px 7px 46px rgba(0, 0, 0, 0.06), 0px 8px 15px rgba(0, 0, 0, 0.06);
`;

Menu.Item = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
  color: #000000;
  padding: 10px;
  transition: all .3s linear;
  :hover{
    background: rgba(233, 233, 233, 0.68);;
  }
`;

export { Container, Wrapper, Section, Logo, Link, Main, Menu };
