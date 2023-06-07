import styled from "styled-components";

export const Container = styled.div`
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const TemperatureContainer = styled.div`
  display: flex;
  align-items: center;
  h1 {
    font-size: 60px;
    font-weight: 100;
    padding: 0;
    margin: 0;
    font-weight: 400;
  }
`;

export const UnitMeasurement = styled.div`
  margin-left: 15px;
  p {
    &:hover {
      cursor: pointer;
    }
  }
`;

export const Unit = styled.p`
  font-size: ${({ selected }) => (selected ? "35px" : "15px")};
  font-weight: ${({ selected }) => (selected ? "bold" : "100")};
  &:hover: {
    transform: ${({ selected }) => (selected ? "scale(1)" : "scale(1.5)")};
  }
`;

export const WeatherDescription = styled.div`
  display: flex;
  margin-top: 5px;
  p {
    font-size: 20px;
  }
  @media only screen and (max-width: 600px) {
    justify-content: center;
    text-align: center;
    flex-direction: column;
    align-items: center;
  }
`;
