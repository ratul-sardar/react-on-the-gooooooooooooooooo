import React from "react";

const Countrie = ({ country }) => {
  const {
    name: { common: countryName },
    flags: {
      flags: { alt, png },
    },
    population: { population },
  } = country;
  console.log(country);
  return (
    <div className="rounded-lg p-4 shadow-md bg-amber-200 space-y-2">
      <img src={png} alt={alt} />

      <p className="text-2xl text-base-content">Name: {countryName}</p>

      <p className="text-2xl text-base-content">Population: {population}</p>
    </div>
  );
};

export default Countrie;
