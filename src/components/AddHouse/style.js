import { Button, Select } from "antd";
import styled from "styled-components";
import { ReactComponent as del } from "../../assets/icons/delete.svg";
const Wrapper = styled.div`
  width: 100%;
  margin: auto;
  margin-top: 50px;
`;

const MenuWrapper = styled.div`
  padding: 30px;
  background: white;
  border: 1px solid #e6e9ec;
`;
const Section = styled.div`
    display: ${({grid}) => grid? "grid": "flex"};
  flex-direction: ${({ flex }) => (flex ? "column" : "row")};
  justify-content: ${({ gap, end }) => (gap ? "space-around" : end ? "end": "start")};
  gap: 20px;
  margin-bottom: 20px;
  grid-template-columns: 23% 23% 23% 23%;
  flex-wrap: ${({wrap}) => wrap ? "wrap" : ""};

`;

const Btn = styled.div`
border: ${({type}) => type === "light"? "1px solid #E6E9EC": "none"}; 
color: ${({type}) => type === "light"? "#000": "#fff"};
border-radius: 2px;
font-size: 14px;
height: 44px; 
background-color: ${({type}) => type === "light"? "transparent": "#0061DF"} !important;
width: 130px;
display: flex;
box-sizing: border-box;
align-items: center;
justify-content: center;
cursor: pointer;
  :active{
    opacity: 0.8;
  }
`

const SelectAnt = styled(Select)`
  min-width: 200px;
  width: 100%;
  max-width: 200px;
  .ant-select-selector {
    height: 44px !important;
  }
  .ant-select-selection-item {
    display: flex !important;
    align-items: center !important;
  }
`;

const IconDelete = styled(del)`
  width: 16px;
  height: 16px;
  cursor: pointer;
  :hover {
    & path {
      fill: red;
    }
  }
`;
const ImgDelete = styled(del)`
  width: 20px;
  height: 20px;
  cursor: pointer;
  background: #fff;
  padding: 3px;
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: 0;
  :hover {
    & path {
      fill: red;
    }
  }
`;
const ImgItem = styled.div`
  width: fit-content;
  position: relative;
`;

const ButtonAnt = styled(Button)`
border: none; 
color: #fff;
border-radius: 2px;
font-size: 14px;
height: 44px; 
background-color: #0061DF !important;
width: 130px;
box-sizing: border-box;
cursor: pointer;
`

export { Wrapper, MenuWrapper, Section, SelectAnt, IconDelete, ImgItem, ImgDelete, Btn, ButtonAnt };