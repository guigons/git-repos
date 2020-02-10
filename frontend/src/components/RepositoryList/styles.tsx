import styled from 'styled-components';

export const Header = styled.div`

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px;

`;

export const Container = styled.div`
  color: #b3b3b3;
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow: auto;
`;

export const Table = styled.table`

  padding: 25px;

  tr {
    th {
      font-size: 11px;
      text-transform: uppercase;
      line-height: 22px;
      letter-spacing: 1.11px;
      font-weight: 300;
      text-align: left;
    }

    td {

      a {
        color: inherit;
        background: inherit;
        border: 0px;
        text-decoration: none;
        font-size: 13px;
        line-height: 32px;
      }

      img {
        width: 24px;
        height: 24px;
      }

      &:hover {
        color: #fff;
      }
    }
  }

`;

export const Title = styled.div`

  span {
    font-size: 11px;
    text-transform: uppercase;
    line-height: 22px;
    letter-spacing: 1.11px;
    font-weight: 300;

    &:nth-child(1) {
      color: red;
      font-weight: bold;
    }

  }

`;

export const Loading = styled.div`

  span {
    font-size: 11px;
    line-height: 22px;
    letter-spacing: 1.11px;
    font-weight: 300;
    color: #D8D16A;
    font-weight: bold;
  }

`;

export const Pagination = styled.div`

  button {
    width: 30px;
    cursor: pointer;

    img {
      width: 10px;
      height: 10px;
    }

  }

  span {
    font-size: 11px;
    text-transform: uppercase;
    line-height: 22px;
    letter-spacing: 1.11px;
    font-weight: 300;
    padding: 20px;
  }

`;

export const Error = styled.label`
  font-size: 11px;
  line-height: 22px;
  letter-spacing: 1.11px;
  font-weight: bold;
  padding: 20px;
  color: red;
`;
