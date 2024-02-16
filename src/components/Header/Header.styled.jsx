import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavMenu = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const LogoHome = styled(NavLink)`
  display: inline-block;
  padding-top: 14px;
  color: #d3d2d2;

  font-size: 35px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);

  :hover,
  :focus,
  :active {
    transform: scale(0.95);
    color: #da4c2c96;
  }
`;
