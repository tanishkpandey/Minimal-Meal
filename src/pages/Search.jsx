import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

function Search() {
  const query = useParams();
  const [searchResults, setSearchResults] = useState([]);

  const getSearch = async () => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
    if (!response.ok) {
      console.log("Error occured while fetching the API");
    }
    const data = await response.json();
    setSearchResults(data);
    console.log(data);
  };

  useEffect(() => {
    getSearch();
  });

  return (
    <div className="w-[1200px] mx-auto flex flex-col justify-center items-center">
      <div className="flex gap-4 flex-wrap my-12 justify-center">
        {dishes.map((item) => (
          <div
            key={item.idMeal}
            className="w-[250px] border-2 border-white p-5 flex flex-col justify-between items-center"
          >
            <img src={item.strMealThumb} alt={item.strMeal} />
            <p className="my-3">{item.strMeal}</p>
            <button>Know more</button>
          </div>
        ))}
      </div>
      <NavLink to="/playground">
        <button>Return to home</button>
      </NavLink>
    </div>
  );
}

export default Search;
