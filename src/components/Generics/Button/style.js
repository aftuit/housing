import styled from "styled-components";
import { ReactComponent as setting} from "../../../assets/icons/setting.svg";
import { ReactComponent as search} from "../../../assets/icons/search.svg";
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

function getWidth({width}){
  if (!width) return "130px";
  else if (`${width}`.includes("%")) return "100%";
  else return `${width}px`;
}

const Container = styled.button`
display: flex;
justify-content: center;
align-items: center;
border-radius: 2px;
font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "14px")};
height: ${({ height }) => (height ? `${height}px` : "44px")};
width: ${getWidth};
cursor: pointer;

${getType};

:active{
    opacity: 0.8;
}

`;

const Icons = styled.div``;

Icons.Setting = styled(setting)`
    margin-right: 8px;
`;
Icons.Search = styled(search)`
    margin-right: 8px;
`;
Icons.Houses = styled(houses)`
    margin-right: 8px;
`;

export { Container, Icons };
