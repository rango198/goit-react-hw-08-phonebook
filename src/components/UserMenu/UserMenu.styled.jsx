import styled from '@emotion/styled';

export const MenuUser = styled.div`
  display: flex;
  margin-top: 10px;
  margin-right: 0 auto;
  justify-content: space-around;
`;

export const MenyBtn = styled.button`
  cursor: pointer;
  border: none;

  margin-right: 20px;
  border-radius: 3px;
  color: #ffff;
  padding: 5px 10px;
  font-size: 14px;
  background-color: #2de075a2;
  transition: background-color 0.3s ease;
  box-shadow: 3px 9px 4px rgba(0, 0, 0, 0.2);
  :hover {
    background-color: #999;
    box-shadow: inset 3px 9px 4px rgba(0, 0, 0, 0.2);
  }
`;

export const UserName = styled.p`
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: 0.05em;
  margin-right: 14px;
  letter-spacing: 2px;
  color: #ffffffad;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`;
