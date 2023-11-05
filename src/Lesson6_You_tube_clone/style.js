// import React from 'react'
import { styled } from "styled-components";

export const Container = styled.div`
  background-color: #181818;
  max-width: 100vw;
  height: 100vh;
  color: #fff;
  display: flex;
  flex-direction: ${({ flex }) => !flex && "column"};
`;
export const Sidebars = styled.div`
  width: 240px;
  background-color: #212121;
  height: 100vh;
  padding-left: 20px;
`;
export const Wrapper = styled.div`
  /* border: 1px solid yellow; */
  min-height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  background-color: #212121;
 
`;
export const Category = styled.div`
  display: flex;
  align-items: center;
  gap: ${({gaps})=> gaps && "8px"}
`;

export const Image = styled.img`
  padding: ${({ left, lgaps }) => (left && "0 20px")||(lgaps&&"0 8px")};
  border-radius: ${({avatars})=> avatars && "50%"};
  padding: ${({avatars})=> avatars && "4px 14px"};
`;

export const SearchIcons = styled.button`
  /* padding: 4px 13px; */
  height: 40px;
  width: 64px;
  background-color: #303030;
  border: none;
  border-radius: 0px 2px 2px 0px;
`;

export const Input = styled.input`
  height: 40px;
  min-width: 362px;
  border: 1px solid #303030;
  border-radius: 2px 0px 0px 2px;
  background-color: #121212;
  outline: none;
  font-size: 18px;
  font-weight: 500;
  color: #aaa;
  padding-left: 10px;
`;

export const MicIcons = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-left: 8px;
  background-color: black;
`;
export const IconsBtn = styled.button`

`