import React from "react";
import { useState } from "react";
// import FeatureList from "./components/FeatureList";
import { NavLink } from "react-router-dom";
import FeatureList from "../components/FeatureList";

function Home() {
  const [feature, setFeature] = useState(false);
  //   const [playground, setPlayground] = useState(false);

  return (
    <div>
      <div className="flex justify-center items-center flex-col w-screen h-screen text-center ">
        {feature ? (
          <FeatureList setFeature={setFeature} />
        ) : (
          <div className="border-white border-2 p-5 rounded-lg w-[450px] h-[300] shadow-2xl">
            <h1 className="m-3">Minimal Meal</h1>
            <p>
              Play around with all the features that <br />
              comes with The Meal DB
            </p>
            <div className="flex gap-3 justify-center mt-8">
              <button
                onClick={() => {
                  setFeature(true);
                }}
              >
                See Feature List
              </button>
              <NavLink to="/playground">
                <button>Playground</button>
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
