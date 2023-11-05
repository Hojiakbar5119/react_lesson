import styled from "styled-components";

export const Container = styled.div`
  background-color: rgb(255, 192, 213);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Wrapper = styled.div`
  /* border: 1px solid white; */
`;
export const Grids = styled.div`
  max-height: 80vh;
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
  max-width: 95vw;
  gap: 15px;
  justify-content: center;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const Fruit = styled.h1`
  border: 2px solid white;
  border-style: dotted;
  margin: 15px auto;
  border-radius: 3px;
  color: #e0306b;
  width: 200px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 48px;
`;

export const Reactangle = styled.div`
  width: 170px;
  height: 220px;
  background-color: white;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  /* padding: 20px; */
`;

export const Comments = styled.p`
  margin-top: 20px;
  font-weight: 500;
  text-transform: capitalize;
  font-size: 20px;
`;

export const Circle = styled.div`
  /* padding-top: 20px; */
  margin-top: 20px;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background-color: #fff787;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Image = styled.img`
  width: 90px;
  height: auto;
`;
