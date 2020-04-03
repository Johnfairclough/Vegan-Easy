import React, { useEffect, useState } from 'react';
import SearchBox from './search-box.js';
import SearchFilter from './filter.js';
import Recipe from './recipe.js';
import './App.css';

const App = () => {
  const APP_ID = '0c5d304d';
  const APP_KEY = '9da46f2d199c32b4f3b93b8b7dc9f244';
  const veg = "vegan";

const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState("");
const [query, setQuery] = useState("vegan");


  useEffect(() => {
    getRecipes();
  }, [query]);

const getRecipes = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&health=${veg}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
};

const updateSearch = e => {
  setSearch(e.target.value);
  console.log(search);
}

const getSearch = e => {
  e.preventDefault();
  setQuery(search);
  setSearch('');
}

const filterLogic = e => {
  e.target.classList.toggle('active-filter');
  const li = e.target;
  if (li.classList.contains('active-filter')) {
    setQuery(li.innerText);
  } else {
    setQuery('');
  }
};


return (
  <div className="App">
    <header className="header">
      <h1 className="title">Vegan Easy</h1>
      <form onSubmit={getSearch} className="search-form">
        <SearchBox updateSearch={updateSearch} placeholder="Search Recipe..." />
      </form>

      <div className="search-filter">
        <SearchFilter filterLogic={filterLogic} />
      </div>

    </header>

    <div className="recipes">
      {recipes.map((recipe, index) => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          url={recipe.recipe.url}
          totalTime={recipe.recipe.totalTime}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
    </div>
<a className="mailto" href="mailto:Johnmfairclough@gmail.com?subject=Hello%20John">Johnmfairclough@gmail.com</a>
</div>


);
};

export default App;
