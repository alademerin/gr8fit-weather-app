import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(16, 108, 193, 0.5);
  padding: 20px 30px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  /* opacity: 0.5; */
  p {
    margin-bottom: 10px;
    font-weight: bold;
  }
  form {
    display: flex;
  }

  @media only screen and (max-width: 600px) {
    width: 80vw;
  }
`;

export const SearchButton = styled.button`
  height: 50px;
  padding: 10px 20px;
  outline: none;
  border: none;
  margin-left: 10px;
  border-radius: 0 25px 25px 0;
  color: #0d6ab4;
  text-transform: uppercase;

  &:hover {
    color: white;
    background: #0f6fb9;
    cursor: pointer;
  border: 1px solid #fff;
  }
`;
