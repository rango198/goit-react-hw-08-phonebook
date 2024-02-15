import styled from '@emotion/styled';
import React from 'react';

const Background = styled.div`
  background-image: url('https://pixabay.com/get/g537b682e99bc32abed2914efd37f0220013f7effbafc53adcc7f7c65980050590cbdd6a6c2d4b0ee9c1f431dd1168b1aaef5986d2ba92bca393031d5903785df_1280.jpg');
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

// https://cdn.pixabay.com/photo/2017/07/31/11/04/wood-2557258_1280.jpg
