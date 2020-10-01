import styled from 'styled-components';

const color = 'blue';

export const Title = styled.h1`
  color: ${color};
  padding: 20px 0;

  p {
    border: 2px solid black;
    width: 80%;
    margin: auto;
    padding: 10px;
  }
`;

export const Button = styled.button`
  background: transparent;
  border: 2px solid ${(props) => (props.color ? props.color : color)};
  color: ${(props) => (props.color ? props.color : color)};
`;
