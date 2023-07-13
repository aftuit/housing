import { Table, Modal } from "antd";
import styled from "styled-components";
import { ReactComponent as edit } from "../../assets/icons/edit.svg";
import { ReactComponent as del } from "../../assets/icons/delete.svg";

const Container = styled.div`
  background: #ffffff;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  padding: 30px;
  margin-top: 32px;
`;

const Wrapper = styled.div`
  padding: var(--padding);
  max-width: 1440px;
  width: 100%;
  margin: 50px auto;
  box-sizing: border-box;
`;

const AntTable = styled(Table)``;

const AntModal = styled(Modal)`
top: 5%;
  width: 80% !important;
  height: 90vh;
  overflow-y: scroll;
`;

const Icons = styled.div``;

Icons.Edit = styled(edit)`
  width: 16px;
  height: 16px;
  margin-right: 16px;
  cursor: pointer;
  :hover {
    & path {
      fill: blue;
    }
  }
`;
Icons.Delete = styled(del)`
  width: 16px;
  height: 16px;
  margin-left: 16px;
  cursor: pointer;
  :hover {
    & path {
      fill: red;
    }
  }
`;

const User = styled.div`
  display: flex;
  flex-direction: ${({ flex }) => (flex ? "column" : "row")};
  margin-left: ${({ flex }) => flex && "16px"};
`;

User.Img = styled.img`
  width: 113px;
  height: 113px;
`;

User.View = styled.img`
  opacity: 0.7;
`

export { Container, Wrapper, AntTable, Icons, User, AntModal };