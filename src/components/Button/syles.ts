import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #03b0ef;
  height: 100%;
  color: #312e38;
  width: 160px;
  font-weight: 500;
  font-size: 20px;
  border: none;
  transition: background-color 0.2s;
  border-top: 10px solid #312e38;
  border-bottom: 10px solid #312e38;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${shade(0.2, '#03b0ef')};
  }

  svg {
    margin-right: 3px;
  }

`;
