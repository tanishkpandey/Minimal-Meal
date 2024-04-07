import React from "react";

function FeatureList({ setFeature }) {
  return (
    <div className="border-white border-2 p-5 rounded-lg w-[450px] h-[300] shadow-2xl">
    <h2 className="m-9 text-2xl">Feature list</h2>
      <ul className="mb-9 text-left w-[300px] mx-auto flex flex-col gap-3">
        <li>👉 Search meal by name</li>
        <li>👉 List all meals by first letter</li>
        <li>👉 Lookup full meal details by id</li>
        <li>👉 Lookup a single random meal</li>
        <li>👉 List all meal categories</li>
        <li>👉 Filter by main ingredient</li>
        <li>👉 Filter by Category</li>
        <li>👉 Filter by Area</li>
      </ul>

      <button
        onClick={() => {
          setFeature(false);
        }}
      >
        Cool
      </button>
    </div>
  );
}

export default FeatureList;
