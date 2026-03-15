import React, { useState } from "react";

const Countrie = ({ country, handleVisitedCountry }) => {
  const {
    name: { common: countryName },
    flags: {
      flags: { alt, png },
    },
    population: { population },
  } = country;

  let [state, setState] = useState(false);

  function handleVisited() {
    setState(!state);
    handleVisitedCountry(country);
  }

  return (
    <div
      className={`rounded-lg p-4 shadow-md ${state ? "bg-amber-200" : "bg-amber-400"}  space-y-2`}
    >
      <img src={png} alt={alt} />

      <p className="text-2xl text-base-content">Name: {countryName}</p>

      <p className="text-2xl text-base-content">Population: {population}</p>

      <button className="btn btn-accent text-white" onClick={handleVisited}>
        {state ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Countrie;
