import React from "react";
import FavoriteButton from "../../components/FavoriteButton";
import Recipe from "../../components/Recipe";
import { removeRecipe } from "./favoriteRecipesSlice.js";

import unfavoriteIcon from "../../img/unfavorite.svg";

export const FavoriteRecipes = (props) => {
  const { favoriteRecipes, dispatch } = props;

  const onRemoveRecipeHandler = (recipe) => {
    dispatch(removeRecipe(recipe));
  };

  // Map the recipe objects in favoriteRecipes to render <Recipe /> components.
  return (
    <div id="favorite-recipes" className="recipes-container">
      {favoriteRecipes.map(createRecipeComponent)}
    </div>
  );

  // Helper Function
  function createRecipeComponent(recipe) {
    return (
      <Recipe recipe={recipe} key={recipe.id}>
        <FavoriteButton
          onClickHandler={() => onRemoveRecipeHandler(recipe)}
          icon={unfavoriteIcon}
        >
          Remove Favorite
        </FavoriteButton>
      </Recipe>
    );
  }
};
