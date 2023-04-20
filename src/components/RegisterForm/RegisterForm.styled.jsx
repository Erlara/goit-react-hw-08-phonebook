import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 320px;
  height: 300px;
  margin-top: 70px;
  padding: 40px 20px;
  border-radius: 10px;
  box-shadow: 0px 10px 10px #072f13;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 80%;
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
  width: 100%;
  height: 25px;
  border-radius: 5px;
`;
