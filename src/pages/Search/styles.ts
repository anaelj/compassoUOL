import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  background: #312e38;
  height: 70px;
  padding: 0 16px;
  color: #312e38;
  width: 100%;
  font-weight: 500;
  margin-right: 20px;
  transition: background-color 0.2s;
`;

export const Lista = styled.div`
  .items-grid {
    display: grid;
    list-style: none;
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
  }

  .items-grid li {
    margin-left: -20px;
    margin-right: 16px;

    background: #f5f5f5;
    border: 2px solid #f5f5f5;
    height: 180px;
    border-radius: 8px;
    padding: 32px 24px 16px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;

    cursor: pointer;

    transition: background-color 0.2s;
    transition: border-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#28262e')};
      border-color: #03b0ef;
    }
   }

  .grid-flex {
    display: flex;
    align-items: center;
    flex-direction: row;
    span {
      margin-right: 10px;
      font-size: 12px;
      svg {
        color: #f9ca24;
        margin: 3px;
      };
    }
  }

  .items-grid li div span {
    flex: 1;
    margin-top: 12px;
    display: flex;
    align-items: center;
    color: #fff;
  }

  .items-grid {
    margin-left: 0px;
    display: grid;
    grid-template-columns: repeat(6, 3fr);

    @media (max-width: 1200px) {
      grid-template-columns: repeat(4, 2fr);
    }
    @media (max-width: 900px) {
      grid-template-columns: repeat(3, 2fr);
    }
    @media (max-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
    }
    gap: 16px;
    list-style: none;
  }

  .items-grid li {
    background: #232129;
    border: 2px solid #03b0ef;
    height: 180px;
    border-radius: 8px;
    padding: 32px 24px 16px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    cursor: pointer;

  }

  .items-grid li span {
    margin-top: 12px;
    display: flex;
    align-items: center;
  }

`;
