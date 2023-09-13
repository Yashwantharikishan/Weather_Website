import React, { useEffect, useState } from "react";
import Clock from "react-live-clock";
import ReactAnimatedWeather from "react-animated-weather";

function DateTimeDisplay() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update every second

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const formattedDateTime = currentDateTime.toLocaleString();

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date} ${month} ${year}`;
  };

  return (
    <div className="date-time-display">
      <div className="date-time">
        <div className="dmy">
          <div id="txt"></div>
          <div className="current-time">
            <Clock format="HH:mm:ss" interval={1000} ticking={true} />
          </div>
          <div className="current-date">{dateBuilder(new Date())}</div>
        </div>
      </div>
    </div>
  );
}

export default DateTimeDisplay;
