import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavMenu = styled.div`
  display: flex;
`;

export const LogoHome = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  color: #d3d2d2;

  font-size: 20px;
  letter-spacing: 2px;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);

  :hover,
  :focus,
  :active {
    transform: scale(0.95);
  }
`;
