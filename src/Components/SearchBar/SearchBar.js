import "./SearchBar.css";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { subDays, addDays } from "date-fns";

const SearchBar = ({
  onSearch,
  onClearSearch,
  search,
  startDate,
  onStartDateChange,
  endDate,
  onEndDateChange,
}) => {
  const [input, setInput] = useState(search || "");
  const [requiredMessage, setRequiredMessage] = useState("");

  useEffect(() => {
    setInput(search || "");
  }, [search]);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if ((startDate || endDate) && input === "") {
      setRequiredMessage(
        "Please provide a search query when selecting a date range."
      );
      return;
    } else {
      setRequiredMessage("");
    }
    onSearch(input, startDate, endDate);
  };

  const handleClearSearch = () => {
    setInput("");
    onClearSearch("");
    onStartDateChange(null);
    onEndDateChange(null);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        {requiredMessage && (
          <p className="required-message">{requiredMessage}</p>
        )}
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Search for articles.."
          aria-label="Search for articles"
        />
        <DatePicker
          selected={startDate}
          onChange={(date) => onStartDateChange(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          minDate={subDays(new Date(), 30)}
          maxDate={addDays(new Date(), 0)}
          placeholderText="Start date"
          aria-label="Select start date"
        />
        <DatePicker
          selected={endDate}
          onChange={(date) => onEndDateChange(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate || subDays(new Date(), 30)}
          maxDate={addDays(new Date(), 0)}
          placeholderText="End date"
          aria-label="Select end date"
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
