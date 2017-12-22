import React, { Component } from "react";
import CocktailContainer from "./components/CocktailContainer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div style={{ overflow: "hidden" }}>
        <CocktailContainer />
      </div>
    );
  }
}

export default App;
