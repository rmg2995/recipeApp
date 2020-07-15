import React, { Component } from "react";
import axios from "axios";
const APP_ID = "b479ca7f";
const APP_KEY = "1091d11a059bf224db39af98bca9540f	";

class FoodDetails extends Component {
  state = {
    foods: {},
    // ingredientLines: [],
  };

  async componentDidMount() {
    let res = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${this.props.match.params.id}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    console.log(res);

    this.setState({
      foods: res.data.hits,
      // ingredientLines: foods.recipe.ingredients,
    });
    // console.log(ingredients);
  }

  displayIngredients = () => {
    return this.state.foods[0]?.recipe.ingredientLines.map((ingredient) => (
      <li className="list-ingredients">{ingredient}</li>
    ));
  };

  render() {
    return (
      <div>
        <div className="single">
          <h1>{this.state.foods[0]?.recipe.label}</h1>
          <br />

          <br />
          <img src={this.state.foods[0]?.recipe.image} />
          <br />
        </div>
        <div className="calories">
          <p>Calories: {parseInt(this.state.foods[0]?.recipe.calories)}</p>
          Ingredient count: {this.state.foods[0]?.recipe.ingredientLines.length}
        </div>
        <div className="ingredients">
          <span>Ingredients:</span>
          {this.displayIngredients()}
        </div>
        <div>Calories: {parseInt(this.state.foods[0]?.recipe.calories)}</div>
        <div>
          <a target="_blank" href={this.state.foods[0]?.recipe.url}>
            Click for directions here!
          </a>
        </div>
        {/* <iframe src={this.state.foods[0]?.recipe.url} /> */}
        {/* {this.state.foods[0]?this.state.foods[0].recipe.label:''} */}
      </div>
    );
  }
}

export default FoodDetails;
