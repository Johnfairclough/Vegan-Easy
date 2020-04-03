import React from 'react';

const SearchFilter = ({ filterLogic }) => (
  <div>
    <ul className="filters">
      <li className="filter" onClick={filterLogic}>
        Falafel
      </li>
      <li className="filter" onClick={filterLogic}>
        Tofu Burgers
      </li>
      <li className="filter" onClick={filterLogic}>
        Vegan Nachos
      </li>
      <li className="filter" onClick={filterLogic}>
        Vegan Breakfast Sandwich
      </li>
    </ul>
  </div>
);

export default SearchFilter;
