import React, { use } from "react";

const Countries = ({ getData }) => {
  let loadData = use(getData);
  let countriesData = loadData.countries;
  console.log(countriesData);

  return <div>HI</div>;
};

export default Countries;
