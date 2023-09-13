import React, { useEffect, useState } from "react";
import { fetchWeatherByCity } from "./WeatherService";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

const WeatherGraph = ({ city }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetchWeatherByCity(city)
      .then((response) => {
        const processedData = response.list.map((item) => ({
          x: new Date(item.dt * 1000),
          y: item.main.temp,
          temperature: item.main.temp,
        }));
        setChartData(processedData);
      })
      .catch((error) => {
        console.error("Error fetching weather forecast data:", error);
      });
  }, [city]);
  console.log(chartData);
  const data = [
    { time: "09:00 AM", temperature: 20 },
    { time: "10:00 AM", temperature: 22 },
    { time: "11:00 AM", temperature: 24 },
    { time: "12:00 PM", temperature: 25 },
    { time: "01:00 PM", temperature: 23 },
  ];

  return (
    <div className="graph">
      <h2>Weather Graph for {city}</h2>
      <LineChart width={600} height={410} data={chartData}>
        <XAxis dataKey="x" scaleType="time" />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default WeatherGraph;
