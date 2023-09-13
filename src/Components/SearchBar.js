import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const handleSearch = () => {
    if (city.trim() === "") {
      setError("Please enter a city name.");
      return;
    }
    onSearch(city);
    setError("");
  };
  console.log(city);

  return (
    <div className="search-bar input-box1">
      <span className="icon">
        <ion-icon name="location"></ion-icon>
      </span>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <label>Enter location</label>
      <div>
        <button type="submit" onClick={handleSearch} className="btn btn-dark">
          Search
        </button>
      </div>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default SearchBar;
