import React, { useState } from "react";
import WeatherDetails from "./WeatherDetails";
import SearchBar from "./SearchBar";
import DateTimeDisplay from "./DateTimeDisplay";
import WeatherGraph from "./WeatherGraph";

function WeatherApp({ setWeatherCondition }) {
  const [forecastData, setForecastData] = useState(null);

  const handleSearch = (searchCity) => {
    setForecastData(searchCity);
  };
  return (
    <div className="weather-app">
      <div className="row">
        <div className="col-4 part1">
          <SearchBar onSearch={handleSearch} />
          <WeatherDetails
            city={forecastData}
            setWeatherCondition={setWeatherCondition}
          />
        </div>

        <div className="col-8 part2">
          <div className="chart">
            <WeatherGraph city={forecastData} />
          </div>
          <DateTimeDisplay />
        </div>

        <h6>All Right Reserved © Yashwant harikishan</h6>
      </div>
    </div>
  );
}

export default WeatherApp;
