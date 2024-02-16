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
  background-color: #dc4a2ab5;
  transition: background-color 0.3s ease;
  box-shadow: 3px 9px 4px rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  :hover {
    background-color: #2de075a2;
    box-shadow: inset 3px 9px 4px rgba(0, 0, 0, 0.2);
  }
`;

export const UserName = styled.p`
  font-size: 20px;
  line-height: 1.5;

  margin-right: 14px;
  letter-spacing: 1px;
  color: #2de075a2;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`;
