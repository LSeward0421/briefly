import "./SearchBar.css";
import { useState, useEffect } from "react";

const SearchBar = ({ onSearch, onClearSearch, search }) => {
  const [input, setInput] = useState(search || "");

  useEffect(() => {
    setInput(search || "");
  }, [search]);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(input);
  };

  const handleClearSearch = () => {
    setInput("");
    onClearSearch("");
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Search for articles.."
        />
        <button type="submit" className="submit-search-btn">
          SEARCH
        </button>
        {input && (
          <button
            type="button"
            onClick={handleClearSearch}
            className="clear-search-btn"
          >
            X
          </button>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
