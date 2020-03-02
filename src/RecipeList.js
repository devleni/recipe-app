import React, { Component } from "react";
import Recipe from "./Recipe";
import PropTypes from "prop-types";
import "./RecipeList.css";

class RecipeList extends Component {
  static defaultProps = {
    recipes: [
      {
        title: "Spaghetti",
        instructions: "Cook pasta and sauce.",
        ingredients: ["pasta", "water", "salt", "sauce"],
        img: "spaghetti.jpg"
      },
      {
        title: "Spaghetti",
        instructions: "Cook pasta and sauce.",
        ingredients: ["pasta", "water", "salt", "sauce"],
        img: "spaghetti.jpg"
      },
      {
        title: "Spaghetti",
        instructions: "Cook pasta and sauce.",
        ingredients: ["pasta", "water", "salt", "sauce"],
        img: "spaghetti.jpg"
      },
    ]
  }

  static propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  render() {
    const recipes = this.props.recipes.map((r, index) => (
      <Recipe key={index} {...r} />
      ));

    return (
      <div className="recipe-list">
        {recipes}
      </div>
    )
  }
}

export default RecipeList;