import styled from "styled-components";
import { ReactComponent as houses} from "../../../assets/icons/houses.svg";

const getType = ({ typeBtn }) => {
    switch (typeBtn) {
      case "dark":
        return {
          background: "transparent",
          border: "1px solid #FFFFFF",
          color: "#fff",
        }; 
      case "light":
        return {
          background: "#FFFFFF",
          border: "1px solid #E6E9EC",
          color: "#0D263B",
        };
      case "primary":
        return {
          background: "#0061DF",
          border: "none",
          color: "#fff",
        };
      default:
        return {
          background: "#0061DF",
          border: "none",
          color: "#fff",
        };
    }
  };
const Container = styled.input`
display: flex;
justify-content: center;
align-items: center;
border-radius: 2px;
min-width: 120px;
font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "14px")};
height: ${({ height }) => (height ? `${height}px` : "44px")};
width: ${({ width }) => (width ? `${width}px` : "100%")};
outline: none;
border: 1px solid #E6E9EC;
padding-left: ${({icon}) => icon? "40px": "20px"};
padding-right: 20px;
/* ${getType}; */

`;

const Wrapper = styled.div`
  position: relative;
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  display: flex;
  align-items: center;
`
const Icon = styled.div`
  position: absolute;
  left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export { Container, Wrapper, Icon };
