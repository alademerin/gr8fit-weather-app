import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: rgba(0, 108, 193, 0.4);
  padding: 25px 35px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  /* opacity: 0.5; */
  margin-top: 15px;
  width: 555px;
  justify-content: space-between;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    width: 80vw;
    justify-content: center;
    align-items: center;
  }

  img {
    height: 150px;
    width: 150px;
    margin-top: 15px;
  }
`;

export const PlaceName = styled.div`
  display: flex;
  p {
    font-size: 25px;
    font-weight: bold;
  }
  @media only screen and (max-width: 1000px) {
    text-align: center;
  }
`;

export const ExtraWeatherInfo = styled.div`
  margin-top: 30px;
  p {
    font-size: 15px;
    margin-top: 10px;
  }
  @media only screen and (max-width: 1000px) {
    /* margin-top: 10px; */
  }
`;

export const LeftCard = styled.div`
  margin-right: 20px;
  @media only screen and (max-width: 600px) {
    margin-right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const RightCard = styled.div`
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
