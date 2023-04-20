import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 320px;
  height: 200px;
  margin-bottom: 20px;
  padding: 30px 20px;
  border-radius: 10px;
  box-shadow: 0px 10px 10px #072f13;
`;

export const Label = styled.label`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  margin-top: 30px;
  height: 30px;
  width: 100px;
  border-radius: 5px;
  background-color: #f0d29b;
  :hover {
    background-color: rgb(245, 161, 248);
  }
`;

export const Input = styled.input`
  height: 25px;
  border-radius: 5px;
`;
