import React from "react";

const SearchBox = ({ search, updateSearch, placeholder}) => (
  <div>
  <input
  type="text"
  className="search-bar"
  value={search}
  onChange={updateSearch}
  placeholder={placeholder}
  />
  <button type="submit" className="search-button">
<i className="fa fa-search"></i> 
  </button>
  </div>
);


export default SearchBox;
