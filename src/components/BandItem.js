// src/components/BandItem.js
import React from "react";

const BandItem = ({ band }) => {
  return (
    <div>
      <h3>{band.name}</h3>
      <p>Founded: {band["life-span"] && band["life-span"].begin}</p>
    </div>
  );
};

export default BandItem;
