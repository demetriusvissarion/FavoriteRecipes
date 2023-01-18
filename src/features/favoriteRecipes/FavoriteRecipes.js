import React from "react";
import FavoriteButton from "../../components/FavoriteButton";
import Recipe from "../../components/Recipe";
// Import removeRecipe from favoriteRecipesSlice.js

import unfavoriteIcon from "../../img/unfavorite.svg";

export const FavoriteRecipes = (props) => {
  // Extract dispatch and favoriteRecipes from props.

  const onRemoveRecipeHandler = (recipe) => {
    // Dispatch a removeRecipe() action.
  };

  // Map the recipe objects in favoriteRecipes to render <Recipe /> components.
  return (
    <div id="favorite-recipes" className="recipes-container">
      {["REPLACE_ME"].map(createRecipeComponent)}
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
