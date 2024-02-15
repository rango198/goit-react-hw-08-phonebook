import styled from '@emotion/styled';
import React from 'react';

const Background = styled.div`
  background-image: url('https://st2.depositphotos.com/1001069/7208/i/950/depositphotos_72080607-stock-photo-office-desk-table-with-computer.jpg');
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  height: 700px;
  padding-top: 100px;
`;

const BackgroundHome = ({ children }) => {
  return <Background>{children}</Background>;
};

export default BackgroundHome;
