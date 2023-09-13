import axios from "axios";

const API_KEY = "fc19492bddc56bb7df9303a919cb11ef";
const API_BASE_URL = "https:api.openweathermap.org/data/2.5";
export const fetchWeatherByCity = async (city) => {
  try {
    const apiUrl = `${API_BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}`;
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchWeatherData = async (city, date) => {
  try {
    const apiUrl = `${API_BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}`;
    const response = await axios.get(apiUrl);

    const filteredData = response.data.list.filter((item) => {
      const itemDate = new Date(item.dt * 1000);
      return itemDate.getDate() === date.getDate();
    });

    if (filteredData.length > 0) {
      return filteredData[0];
    } else {
      throw new Error("No weather data available for the specified date.");
    }
  } catch (error) {
    throw error;
  }
};
