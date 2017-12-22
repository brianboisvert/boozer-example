import React from "react";
import Cocktail from "./Cocktail";

const CocktailList = props => {
  const cocktails = props.cocktails.map(cocktail => (
    <li key={cocktail.id} onClick={() => props.handleSelection(cocktail)}>
      {cocktail.name}
    </li>
  ));
  return (
    <div>
      <ul style={{ height: "100%", overflow: "scroll" }}>{cocktails}</ul>
    </div>
  );
};

export default CocktailList;
