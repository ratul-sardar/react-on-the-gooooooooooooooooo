import React, { use, useState } from "react";
import Countrie from "../Countrie/Countrie";

const Countries = ({ getData }) => {
  let loadData = use(getData);
  let countriesData = loadData.countries;

  let [visited, setVisitedCountry] = useState([]);

  function handleVisitedCountry(country) {
    console.log("visited clicked");
    console.log(country);
    let countArray = [...visited, country];
    setVisitedCountry(countArray);
  }

  return (
    <>
      <h1 className="font-semibold text-5xl mb-4">These are the countries</h1>
      <h3 className="font-semibold text-3xl mb-4">
        Country visited: {visited.length}
      </h3>
      <div className="grid grid-cols-3 gap-4">
        {countriesData.map((country) => (
          <Countrie
            key={country.cca3.cca3}
            country={country}
            handleVisitedCountry={handleVisitedCountry}
          ></Countrie>
        ))}
      </div>
    </>
  );
};

export default Countries;
