import React, { useEffect, useState } from "react";
import WeatherApp from "./Components/WeatherApp";
import "./WeatherBackgrounds.css";

function App() {
  const [weatherCondition, setWeatherCondition] = useState("");
  let bodyClassName = "";
  const condition = weatherCondition.toLowerCase();
  console.log(condition);

  if (condition) {
    if (condition === "clear") {
      bodyClassName = "clear";
    } else if (condition === "clouds") {
      bodyClassName = "partly-cloudy";
    } else if (condition === "rain") {
      bodyClassName = "rainy";
    } else if (condition === "mist") {
      bodyClassName = "mist";
    } else if (condition === "haze") {
      bodyClassName = "haze";
    } else {
      bodyClassName = "default-background";
    }
  }

  return (
    <div className={`App ${bodyClassName}`}>
      <WeatherApp setWeatherCondition={setWeatherCondition} />
    </div>
  );
}

export default App;
