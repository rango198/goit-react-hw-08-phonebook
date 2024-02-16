import styled from '@emotion/styled';
import img from '../../photo/phone-5820436_640.jpg';

const Background = styled.div`
  /* background-image: url(${img}); */
  background-size: cover;

  background-repeat: no-repeat;
  width: 800px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 2rem;
  color: #333;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 20px;
`;

const IMG = ({ children }) => {
  return <Background>{children}</Background>;
};

export default IMG;
