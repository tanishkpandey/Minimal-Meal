import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

function Search() {
  const { query } = useParams();
  const [searchResults, setSearchResults] = useState([]);

  const getSearch = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      if (!response.ok) {
        throw new Error("Error occurred while fetching the API");
      }
      const data = await response.json();
      setSearchResults(data.meals);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSearch();
  }, [query]); // Ensure useEffect runs only when 'query' changes

  return (
    <div className="w-[1200px] mx-auto flex flex-col justify-center items-center">
      <div className="flex gap-4 flex-wrap my-12 justify-center">
        {searchResults.length === 0 ? (
          <div>No data found</div>
        ) : (
          searchResults.map((meal) => (
            <div
              key={meal.idMeal}
              className="w-[250px] border-2 border-white p-5 flex flex-col justify-between items-center"
            >
              <img src={meal.strMealThumb} alt={meal.strMeal} />
              <p>{meal.strMeal}</p>
              {/* You can add more details if needed */}
            </div>
          ))
        )}
      </div>
      <NavLink to="/playground">
        <button>Return to home</button>
      </NavLink>
    </div>
  );
}

export default Search;
