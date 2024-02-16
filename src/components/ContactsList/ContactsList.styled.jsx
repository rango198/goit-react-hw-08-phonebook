import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  gap: 15px;
  height: 300px;
  overflow-y: auto;
`;

export const BtnItem = styled.button`
  cursor: pointer;
  border: none;

  margin-right: 20px;
  border-radius: 3px;
  color: #ffff;
  padding: 5px 10px;
  font-size: 16px;
  background-color: #2de075a2;
  transition: background-color 0.3s ease;
  box-shadow: 3px 9px 4px rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  :hover {
    background-color: #dc4a2ab5;
    box-shadow: inset 3px 9px 4px rgba(0, 0, 0, 0.2);
    color: red;
  }
`;

export const ListItem = styled.li`
  display: flex;
  gap: 23px;
  cursor: pointer;
  font-size: 20px;
  line-height: 1.5;
  letter-spacing: 0.02em;
  letter-spacing: 1px;
  color: #eee8e8ac;

  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`;
