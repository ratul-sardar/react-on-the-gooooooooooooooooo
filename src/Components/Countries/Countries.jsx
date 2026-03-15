import React, { use } from "react";
import Countrie from "../Countrie/Countrie";

const Countries = ({ getData }) => {
  let loadData = use(getData);
  let countriesData = loadData.countries;

  return (
    <>
      <h1 className="font-semibold text-5xl mb-4">
        This is the countries title
      </h1>
      <div className="grid grid-cols-3 gap-4">
        {countriesData.map((country) => (
          <Countrie key={country.cca3.cca3} country={country}></Countrie>
        ))}
      </div>
    </>
  );
};

export default Countries;
