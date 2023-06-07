import styled from "styled-components";

export const Container = styled.div`
  background-image: url(${({ img }) => img});
  background-position: center;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    /* padding: 0 20px; */
  }
`;
