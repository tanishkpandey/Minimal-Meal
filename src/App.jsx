import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Playground from "./pages/Playground";
import Categories from "./pages/Categories";
import Search from "./pages/Search";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/playground" element={<Playground />} />
      <Route
        path="/categories/countries/:countryname"
        element={<Categories />}
      />
      <Route path="/search/:query" element={<Search />} />
    </Routes>
  );
}

export default App;
