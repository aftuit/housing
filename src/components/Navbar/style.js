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

export { Container, Wrapper, Section, Logo, Link, Main };
