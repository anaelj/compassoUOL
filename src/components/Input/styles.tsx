import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #fff;
  padding: 16px;
  width: 300px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  border-top: 10px solid #312e38;
  border-bottom: 10px solid #312e38;


  color: #666360;

  ${props =>
    props.isFocused &&
    css`
      border-color: ##312e38;
      color: #312e38;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}

  input {
    font-size: 20px;
    background: transparent;
    flex: 1;
    border: none;
    color: #666360;
    outline: none;

    &::placeholder {
      color: #fff;
    }
   }
  svg {
    margin-right: 16px;
  }

`;

