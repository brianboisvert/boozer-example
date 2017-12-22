import React, { Component } from "react";
import CocktailList from "./CocktailList";
import CocktailDetail from "./CocktailDetail";
import CocktailForm from "./CocktailForm";

class CocktailContainer extends Component {
  state = {
    cocktails: [],
    selectedCocktail: { proportions: [] },
    newCocktail: {
      name: "",
      description: "",
      instructions: "",
      proportions: [""]
    }
  };

  addInput = event => {
    event.preventDefault();
    this.setState(prevState => ({
      ...prevState,
      newCocktail: {
        ...prevState.newCocktail,
        proportions: [...prevState.newCocktail.proportions, ""]
      }
    }));
  };
  componentDidMount() {
    this.getCocktailNames();
  }

  getCocktailNames = () => {
    fetch("http://localhost:3000/api/v1/cocktails")
      .then(res => res.json())
      .then(cocktails => this.setState({ cocktails }));
  };

  getCocktailDetails = selectedCocktail => {
    fetch(`http://localhost:3000/api/v1/cocktails/${selectedCocktail.id}`)
      .then(res => res.json())
      .then(selectedCocktail => this.setState({ selectedCocktail }));
  };

  // postCocktail = () => {
  //   fetch(`http://localhost:3000/api/v1/cocktails/`, {
  //     method: "POST",
  //     headers: {
  //       accept: "application/json",
  //       "content-type": "application/json"
  //     },
  //     body: JSON.stringify(this.state.newCocktail)
  //   })
  //     .then(res => res.json())
  //     .then(cocktails => this.setState({ cocktails }));
  // };

  handleSelection = selectedCocktail => {
    this.getCocktailDetails(selectedCocktail);
  };

  handleChange = event => {
    event.persist();
    const cId = event.target.id;
    const cValue = event.target.value;
    if (event.target.name === "proportion") {
      this.setState(prevState => ({
        newCocktail: {
          ...prevState.newCocktail,
          proportions: prevState.newCocktail.proportions.map(
            (proportion, index) => {
              if (index == cId) {
                return cValue;
              } else {
                return proportion;
              }
            }
          )
        }
      }));
    } else {
      this.setState(prevState => ({
        newCocktail: {
          ...prevState.newCocktail,
          [event.target.name]: event.target.value
        }
      }));
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    this.postCocktail();
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <CocktailList
          cocktails={this.state.cocktails}
          handleSelection={this.handleSelection}
        />
        <CocktailDetail {...this.state.selectedCocktail} />
        <CocktailForm
          {...this.state.newCocktail}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          addInput={this.addInput}
        />
      </div>
    );
  }
}

export default CocktailContainer;
