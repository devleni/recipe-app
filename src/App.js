import React from 'react';
import './App.css';
import Recipe from "./Recipe";

function App() {
  return (
    <Recipe
      title="Pasta"
      ingredients={["flour", "water"]}
      instructions="Make pasta and cook it."
      img="spaghetti.jpg"
    />
  );
}

export default App;
