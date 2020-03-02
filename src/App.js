import React, { Component } from 'react';
import Navbar from "./Navbar";
import Recipe from "./Recipe";
import RecipeList from "./RecipeList";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <RecipeList />
      </div>
    );
  }
}

export default App;
