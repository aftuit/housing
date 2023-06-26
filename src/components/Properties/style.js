import styled from "styled-components";

const Container = styled.div`
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
    gap: 25px;
    padding: var(--padding);
    max-width: 1440px;
    width: 100%;
    margin: 50px auto auto;
    box-sizing: border-box;
`;


export {Container};