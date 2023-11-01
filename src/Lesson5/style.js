import styled, { css, keyframes } from "styled-components";


const common = css`
  width: 200px;
  font-size: 20px;
  color: white;
  height: 40px;
  background-color: chocolate;
  padding: 20px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    /* transform: scale(0,8); */
    background-color: rgb(221, 120, 48);
  }
  &:active {
    transform: scale(0.97);
  }
`;

const rotate = keyframes`

from{
  transform: rotate(0deg);
}
to{
  transform: rotate(360deg);
}

`;



export const Container = styled.div`
  width: 90vw;
  height: 50vh;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
`;

export const Btna = styled.div`
  ${common}
`;


export const Rotate = styled.div`

display: flex;
justify-content: center;
align-items: center;
width: 100px;
height: 100px;
border-radius: 50%;
border: 1px solid white;
animation: ${rotate} 2s linear infinite;

`;