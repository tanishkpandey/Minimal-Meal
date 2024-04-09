import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Playground() {
  const navigate = useNavigate();
  const [countryData, setCountryData] = useState([]);
  const [search, setSearch] = useState("");
  const [random, setRandom] = useState("");

  const getRandomDish = async () => {
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      if (!response.ok) {
        return console.log("Error occurred while fetching API");
      }
      const data = await response.json(); 
      setRandom(data.meals[0]);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const getCountries = async () => {
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setCountryData(data.meals);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  function changeHandler(event) {
    setSearch(event.target.value);
  }

  const getSearch = async () => {
    try {
      navigate(`/search/${search}`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div>
      {/* Header Section */}
      <div className="flex my-12 justify-evenly h-[500px] ">
        <div className="text-center flex flex-col items-center justify-center">
          <h2 className="text-3xl mb-2">Welcome to Minimal Meals</h2>
          <p>Consider ordering from our website where we do food subtly</p>
          <button
            className="mt-4"
            onClick={() => {
              getRandomDish();
            }}
          >
            Random Meal
          </button>
        </div>
        {random && (
          <div className="flex gap-4 my-12 justify-center">
            <div
              key={random.idMeal}
              className="w-[250px] border-2 border-white p-5 flex flex-col justify-between items-center"
            >
              <img src={random.strMealThumb} alt={random.strMeal} />
              <p className="my-3">{random.strMeal}</p>
              <button>Know more</button>
            </div>
          </div>
        )}
      </div>

      {/* Searching section */}
      <div className="flex my-12 flex-col text-center">
        <hr className="mb-12" />
        <h2 className="text-2xl mb-4">Search your meal here</h2>
        <div className="flex gap-2 w-[321px] m-auto">
          <input type="text" className="rounded-md" onChange={changeHandler} />

          <button onClick={getSearch}>Search</button>
        </div>
        <hr className="mt-12" />
      </div>

      {/* Browse by country */}
      <div className="flex my-12 flex-col text-center">
        <hr className="mb-12" />
        <h2 className="text-2xl mb-4">Search by country 🔍</h2>
        <div className="flex gap-2 flex-wrap w-[1000px] m-auto text-center">
          {countryData.map((item) => (
            <NavLink
              to={`/categories/countries/${item.strArea}`}
              key={item.strArea}
            >
              <button>{item.strArea}</button>
            </NavLink>
          ))}
        </div>
        <hr className="mt-12" />
      </div>
    </div>
  );
}

export default Playground;
