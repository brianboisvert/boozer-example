import React from "react";

const CocktailForm = props => {
  const proportionInputs = props.proportions.map((proportion, index) => (
    <input
      type="text"
      name="proportion"
      id={index}
      value={proportion}
      onChange={props.handleChange}
      placeholder="Add proportion"
    />
  ));
  return (
    <div>
      <form>
        <div>
          <input
            type="text"
            name="name"
            value={props.name}
            onChange={props.handleChange}
            placeholder="Cocktail Name"
          />
        </div>
        <div>
          <input
            type="text"
            name="description"
            value={props.description}
            onChange={props.handleChange}
            placeholder="Description"
          />
        </div>
        <div>
          <input
            type="text"
            name="instructions"
            value={props.instructions}
            onChange={props.handleChange}
            placeholder="Instructions"
          />
        </div>
        {proportionInputs}
        <div>
          <button onClick={props.addInput}>+</button>
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default CocktailForm;
