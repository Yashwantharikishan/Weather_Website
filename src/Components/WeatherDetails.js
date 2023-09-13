import React, { useEffect, useState } from "react";
import { fetchWeatherByCity } from "./WeatherService";

const WeatherDetails = ({ city, setWeatherCondition }) => {
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchWeatherByCity(city);
        setForecastData(getCurrentWeatherData(data.list));
        setWeatherCondition(data.list[0].weather[0].main);
        console.log(data.list[0].weather[0].main);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [city]);

  const getCurrentWeatherData = (forecastList) => {
    const currentTime = new Date().getTime() / 1000;
    const currentWeatherData = forecastList.find(
      (entry) => entry.dt >= currentTime
    );

    return currentWeatherData;
  };

  if (!forecastData) {
    return <div className="loading">Loading...</div>;
  }

  const cityName = city;
  const temperature = forecastData.main.temp;
  const feels_like = forecastData.main.feels_like;
  const humidity = forecastData.main.humidity;
  const weatherDescription = forecastData.weather[0].description;
  const weatherCondition = forecastData.weather[0].main;
  const speed = forecastData.wind.speed;
  const visibility = forecastData.visibility;
  const all = forecastData.clouds.all;
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();
  return (
    <div className="weather-details">
      <h2>Weather Details</h2>
      <ul>
        <li>Location: {cityName}</li>
        <li>
          Weather: {weatherCondition} ({weatherDescription})
        </li>
        <li>Date: {formattedDate}</li>
        <li>Temperature: {temperature}°C</li>
        <li>Feels Like: {feels_like}°C</li>
        <li>Humidity: {humidity}%</li>
        <li>Wind Speed: {speed} m/s</li>
        <li>Visibility: {visibility} meters</li>
        <li>Cloud Cover: {all}%</li>
      </ul>
    </div>
  );
};

export default WeatherDetails;
