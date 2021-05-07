import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  height: auto;
  width: auto;
  color: #fff;
  margin-left: 16px;

`;

export const ItemList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-content: center;
  align-items: center;
  border: 1px solid #fff;
  margin: 3px;
  padding: 10px;
  background: #312e38;

  a {
    color: #fff;
  }

  img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-content: center;
    padding: 10px;
    span:first-child {
      color: #f9ca24;
    }

  }

`;
