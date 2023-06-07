import React from "react";
import {
  Container,
  TemperatureContainer,
  Unit,
  UnitMeasurement,
  WeatherDescription,
} from "./TemperatureCard.styled";

const TemperatureCard = ({
  CelStyle,
  FarStyle,
  temperature,
  description,
  celciusClicked,
  farenheitClicked,
  celciusSelected,
  farenheitSelected,
}) => {
  return (
    <Container>
      <TemperatureContainer>
        <h1>{temperature}°</h1>
        <UnitMeasurement>
          <Unit selected={celciusSelected} style={CelStyle} onClick={celciusClicked}>
            C
          </Unit>
          <Unit selected={farenheitSelected} style={FarStyle} onClick={farenheitClicked}>
            F
          </Unit>
        </UnitMeasurement>
      </TemperatureContainer>
      <WeatherDescription>
        <p>{description}</p>
      </WeatherDescription>
    </Container>
  );
};

export default TemperatureCard;
