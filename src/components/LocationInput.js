// src/components/LocationInput.js
import React, { useState } from "react";

const LocationInput = ({ onSubmit }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSubmit(city);
      setCity("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">Search Bands</button>
    </form>
  );
};

export default LocationInput;
