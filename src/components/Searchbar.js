import React, { useState } from "react";
import "./Searchbar.css";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    alert(`Bạn đã tìm kiếm: ${query}`);
  };

  return (
    <div className="search-bar">
      <i className="search-icon fas fa-search" onClick={handleSearch}></i>
      <input
        type="text"
        placeholder="Tìm kiếm"
        value={query}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
