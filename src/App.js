import React from 'react';
import './App.css';
import Recipe from "./Recipe";

function App() {
  return (
    <Recipe title="Pasta" ingredients={["flour", "water"]} />
  );
}

export default App;
