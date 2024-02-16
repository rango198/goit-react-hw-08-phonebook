import styled from '@emotion/styled';
import React from 'react';
import img from '../photo/cup-of-coffee-1280537_1920.jpg';

const Background = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  height: 700px;
  padding-top: 60px;
`;

const BackgroundHome = ({ children }) => {
  return <Background>{children}</Background>;
};

export default BackgroundHome;
