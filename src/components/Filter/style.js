import styled from "styled-components";
import { Select } from 'antd';

export const Container = styled.div`
    display: flex;
    padding: var(--padding);
    padding-top: 10px;
    padding-bottom: 10px;
    gap: 20px;
`

export const MenuWrapper = styled.div`
    padding: 20px;
    background: #fff;
    border: 1px solid #efe6e9;
`;

export const Section = styled.div`
    margin-bottom: 20px;
    display: ${({grid}) => grid? "grid": "flex"};
    grid-template-columns: 23% 23% 23% 23%;
    gap: 10px;
`;

export const Div = styled.div`
    gap: 25px;
    display: flex;
    margin-left: auto;
`

export const SelectAnt = styled(Select)`
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