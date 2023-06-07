import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #fff;
  border-radius: 25px 0 0 25px;
  padding: 5px 10px;
  width: 390px;
  height: 50px;
  input {
    margin-left: 10px;
    background: none;
    outline: none;
    border: none;
    width:100%;
    &::placeholder{
      color: white;
  }
`;
