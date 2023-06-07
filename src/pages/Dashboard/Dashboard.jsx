import axios from "axios";
import React, { useEffect, useState } from "react";
import Form from "../../components/Form/Form";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import { timeFormat } from "d3-time-format";
import { FidgetSpinner } from "react-loader-spinner";

import { Container } from "./Dashboard.styled.js";

import Day from "../../assets/day.jpg";
// import dotenv from 'dotenv';
// dotenv.config();

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [isCelciusClicked, setIsCelciusClicked] = useState(true);
  const [dataLoading, setDataLoading] = useState(false);
  const [celciusSelected, setCelciusSelected] = useState(true);
  const [farenheitSelected, setFarenheitSelected] = useState(false);

  // const formatTime = timeFormat("%B %d %Y");
  const apiKey = process.env.REACT_APP_API_KEY;

  const fetchWeatherInfo = async (query) => {
    setDataLoading(true);
    try {
      const response = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${query}`
      );
      const data = await response.data;
      await setWeatherData([data]);
      setDataLoading(false);
    } catch (e) {
      alert("invalid input: location not found");
      setDataLoading(false);
      console.error(e);
    }
  };

  useEffect(() => {
    const getCurrentLocationInfo = async () => {
      setDataLoading(true);
      try {
        const position = await getCurrentPosition();
        const { latitude, longitude } = position.coords;
        const response = await axios.get(
          `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}`
        );
        const data = response.data;
        await setWeatherData([data]);
        setDataLoading(false);
      } catch (error) {
        alert("Unable to retrieve your current location");
        setDataLoading(false);
      }
    };
    getCurrentLocationInfo();
  }, [apiKey]);

  const getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // const memoizedFetchWeatherInfo = useMemo(() => fetchWeatherInfo, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await fetchWeatherInfo(searchQuery);
  };

  const handleCelciusClicked = () => {
    setIsCelciusClicked(true);
    setCelciusSelected(true);
    setFarenheitSelected(false);
  };
  const handleFarenheitClicked = () => {
    setIsCelciusClicked(false);
    setFarenheitSelected(true);
    setCelciusSelected(false);
  };

  // const format

  // const formattedDate = ;

  console.log(weatherData);
  return (
    <Container img={Day}>
      <Form inputValueChanged={handleInputChange} onFormSubmit={handleFormSubmit} />
      {dataLoading ? (
        <>
          <p style={{ fontSize: "30px" }}>Loading location....</p>
          <FidgetSpinner
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
            ballColors={["#fff", "#fff", "#fff"]}
            backgroundColor="#fff"
          />
        </>
      ) : (
        <div>
          {}
          {weatherData.map((wd, idx) => (
            <WeatherCard
              date={timeFormat("%B %d, %Y - %H:%M")(new Date(wd.location.localtime))}
              key={idx}
              country={wd.location.country}
              name={wd.location.name}
              humidity={wd.current.humidity}
              description={wd.current.condition.text}
              pressure={wd.current.pressure_mb}
              temperature={isCelciusClicked ? wd.current.temp_c : wd.current.temp_f}
              img={wd.current.condition.icon}
              visibility={wd.current.vis_km}
              celciusClicked={handleCelciusClicked}
              farenheitClicked={handleFarenheitClicked}
              uv={wd.current.uv}
              windDirection={wd.current.wind_dir}
              celciusSelected={celciusSelected}
              farenheitSelected={farenheitSelected}
            />
          ))}
        </div>
      )}
    </Container>
  );
};

export default Dashboard;
