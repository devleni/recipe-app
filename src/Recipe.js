import React, {Component} from "react";
import PropTypes from "prop-types";
import "./Recipe.css";

class Recipe extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    instructions: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
  }
  render() {
    const {title, img, instructions} = this.props;
    const ingredients = this.props.ingredients.map((ingredient, index) => (
      <li key={index}>{ingredient}</li>
    ));
    return (
      <div className="recipe-card">
        <div className="recipe-card-img">
          <img src={img} alt={title} />
        </div>
        <div className="recipe-card-content">
          <h2 className="recipe-title">{title}</h2>
          <h3>Ingredients:</h3>
          <ul>
            {ingredients}
          </ul>
          <h3>Instructions:</h3>
          <p>{instructions}</p>
        </div>
      </div>
    );
  }
}

export default Recipe;