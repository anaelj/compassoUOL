import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  height: auto;
  width: auto;
  padding: 0px;
  color: #fff;

`;

export const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  border: 1px solid #fff;
  margin: 3px;
  padding: 10px;
  background: #312e38;

  a {
    color: #fff;
  }
  label {
    color: #f9ca24;
    span {
      padding: 5px;
      color: #fff;
    }
  }

`;
