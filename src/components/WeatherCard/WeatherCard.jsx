import React from "react";
import TemperatureCard from "../TemperatureCard/TemperatureCard";
import { Container, ExtraWeatherInfo, LeftCard, PlaceName, RightCard } from "./WeatherCard.styled";

const WeatherCard = ({
  country,
  name,
  humidity,
  visibility,
  temperature,
  pressure,
  description,
  img,
  celciusClicked,
  farenheitClicked,
  uv,
  windDirection,
  date,
  celciusSelected,
  farenheitSelected
}) => {
  return (
    <Container>
      <LeftCard style={{ marginTop: "10px" }}>
        <PlaceName>
          <p>
            {name}, {country.toUpperCase()}
          </p>
        </PlaceName>
        <p style={{ marginTop: "10px" }}>{date}</p>
        <img src={img} alt="weather-icon" />
        {/* <p>region :{region}</p> */}
      </LeftCard>
      <RightCard>
        <TemperatureCard
          // pStyle={{ color: "red" }}
          description={description}
          celciusClicked={celciusClicked}
          farenheitClicked={farenheitClicked}
          temperature={temperature}
          celciusSelected={celciusSelected}
          farenheitSelected={farenheitSelected}
        />
        <ExtraWeatherInfo>
          <p>Humidity: {humidity}%</p>
          <p>Wind Direction: {windDirection}</p>
          <p>UV:{uv} </p>
          <p>Pressure: {pressure}hPA</p>
          <p>Visibility: {visibility}Km</p>
          {/* <p>Weather description:{description}</p> */}
        </ExtraWeatherInfo>
      </RightCard>
    </Container>
  );
};

export default WeatherCard;
