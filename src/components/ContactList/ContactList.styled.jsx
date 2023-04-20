import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0 0 0;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  font-size: 22px;

  :not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const Button = styled.button`
  margin-left: 10px;
  height: 30px;
  width: 70px;
  border-radius: 5px;
  background-color: #f0d29b;
  :hover {
    background-color: rgb(245, 161, 248);
  }
`;
