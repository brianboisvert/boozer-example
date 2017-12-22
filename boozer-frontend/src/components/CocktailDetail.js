import React from "react";

const CocktailDetail = drink => {
  const proportions = drink.proportions.map(p => (
    <li>
      {p.amount} of {p.ingredient_name}
    </li>
  ));
  return (
    <div>
      <h2>{drink.name}</h2>
      <p>{drink.description}</p>
      <p>{drink.instructions}</p>
      <ul>{proportions}</ul>
    </div>
  );
};

export default CocktailDetail;
