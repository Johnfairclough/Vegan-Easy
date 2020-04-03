import React from 'react';

const Recipe = ({ title, calories, image, ingredients, totalTime, url }) => (
  <div className="recipe">

  <div className="main">
  <img className="image" src={image} alt="" />
  </div>

  <div className="split">
  <div className="side">
  <h1 className="recipe_title">{title}</h1>
  <h2 className="ingredients-title">Ingredients:</h2>

  <ul className="ingredients">
  {ingredients.map((ingredient, index) => (
         <li className="ingredient" key={index}> {ingredient.text} </li>
  ))}
  </ul>


  </div>

  <div className="end">
  <p className="calories">Calories: {parseInt(calories)} Kcal</p>
  <p className="calories">Cook Time: {parseInt(totalTime)} min</p>


  <a href={url} target="_blank" className="url" rel="noopener noreferrer">Cooking Instructions</a>
  </div>
  </div>

  </div>


);

export default Recipe;
