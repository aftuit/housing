import styled from "styled-components";

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
const Container = styled.button`
display: flex;
justify-content: center;
align-items: center;
border-radius: 2px;
min-width: 120px;
font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "14px")};
height: ${({ height }) => (height ? `${height}px` : "44px")};
width: ${({ width }) => (width ? `${width}px` : "130px")};
cursor: pointer;

${getType};

:active{
    opacity: 0.8;
}

`;

export { Container };
