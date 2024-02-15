import styled from '@emotion/styled';

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
`;

export const BtnLogin = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 8px;
  color: #fff;
  background-color: #46adad;
  margin-top: 30px;
  padding: 10px 7px;
  font-size: 16px;

  transition: background-color 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  :hover {
    background-color: #999;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const Label = styled.label`
  display: flex;
  margin: 10px 0 5px 0;
`;

export const Input = styled.input`
  border: none;
  padding: 15px;
  border-radius: 3.5px;
  width: 250px;
  font-size: 16px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);
  background-color: rgba(157, 144, 168, 0.63);
`;
