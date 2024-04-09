import { useLocation } from "react-router-dom";

function SearchResultsComponent() {
  const location = useLocation();
  const searchResults = location.state.searchResults;
  console.log(searchResults);
  return <div>Search will displayed here</div>;
}

export default SearchResultsComponent;
