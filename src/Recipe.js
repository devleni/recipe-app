import React, {Component} from "react";

class Recipe extends Component {
  render() {
    const {title} = this.props;
    const ingredients = this.props.ingredients.map((ingredient, index) => (
      <li key={index}>{ingredient}</li>
    ));
    return (
      <div>
        <h1>{title}</h1>
        <ul>
          {ingredients}
        </ul>
      </div>
    );
  }
}

export default Recipe;