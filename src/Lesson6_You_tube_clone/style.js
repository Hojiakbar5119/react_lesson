import { styled } from "styled-components";

export const Container = styled.div`
background-color: #181818;
max-width: 100vw;
height: 100vh;
color: #fff;
display: flex;
flex-direction: ${({flex})=> !flex && 'column'};
`;
export const Sidebars = styled.div`
width: 240px;
background-color: #212121;
height: 100vh;
`
export const Wrapper = styled.div`
border: 1px solid yellow;
min-height: 56px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 30px;
`
export const Category = styled.div`
display: flex;
`