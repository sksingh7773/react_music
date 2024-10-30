// src/components/BandList.js
import React from "react";
import BandItem from "./BandItem";

const BandList = ({ bands }) => {
  return (
    <div>
      <h2>Recently Founded Bands</h2>
      {bands.length > 0 ? (
        bands.map((band) => <BandItem key={band.id} band={band} />)
      ) : (
        <p>No bands found for this location.</p>
      )}
    </div>
  );
};

export default BandList;
