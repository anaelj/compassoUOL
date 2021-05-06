import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: left;
  background: #312e38;
  height: 220px;
  padding: 0 16px;
  color: #312e38;
  width: 100%;
  font-weight: 500;
  margin-right: 20px;
  transition: background-color 0.2s;

`;

export const Perfil = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 20px;

  img {
      margin-top: 20px;
      width: 160px;
      height: 160px;
      border-radius: 50%;
  }
  span {
      color: #fff;
      margin-top: 3px;
  }
`;
export const PerfilDetail = styled.div`

  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  margin-left: 20px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: left;

    span {
        color: #fff;
        margin: 5px;
    }
    a {
      color: #fff;
    }
    svg {
      color: #f9ca24;
      margin-right: 3px;
    }
  }

`;



