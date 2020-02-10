import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background: #121212;
  color: #b3b3b3;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  overflow: auto;
  padding: 25px;
`;

export const Title = styled.span`
  font-size: 11px;
  text-transform: uppercase;
  line-height: 22px;
  letter-spacing: 1.11px;
  font-weight: 300;
`;

export const List = styled.ul`
    list-style: none;

    li {
      button {
        color: inherit;
        background: inherit;
        border: 0px;
        text-decoration: none;
        font-size: 13px;
        line-height: 32px;
        cursor: pointer;

        &:hover {
          color: #fff;
        }

      }

    }
`;


export const Loading = styled.div`

  padding: 25px;

  span {
    font-size: 11px;
    line-height: 22px;
    letter-spacing: 1.11px;
    font-weight: 300;
    color: #D8D16A;
    font-weight: bold;
  }

`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 20px;
  border: 0px;
  margin: 10px 0px 10px 0px;
`;
