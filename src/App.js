// src/App.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import BandList from "./components/BandList";
import LocationInput from "./components/LocationInput";

function App() {
  const [location, setLocation] = useState("");
  const [bands, setBands] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchLocation = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:3000/bands/location");
        setLocation(response.data.city);
        setLoading(false);
      } catch (err) {
        setError("Unable to retrieve location.");
        setLoading(false);
      }
    };
    fetchLocation();
  }, []);

  const fetchBands = async (city) => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3000/bands/search", {
        params: { city },
      });
      setBands(response.data);
      setLoading(false);
    } catch (err) {
      setError("Error fetching bands.");
      setLoading(false);
    }
  };

  const handleLocationSubmit = (city) => {
    setLocation(city);
    fetchBands(city);
  };

  return (
    <div className="App">
      <h1>Music Band Search</h1>
      <LocationInput onSubmit={handleLocationSubmit} />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <BandList bands={bands} />
      )}
    </div>
  );
}

export default App;
