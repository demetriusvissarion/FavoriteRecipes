import React from "react";
import { useSelector, useDispatch } from "react-redux";

import FavoriteButton from "../../components/FavoriteButton";
import Recipe from "../../components/Recipe";
import {
  favoriteRecipesSlice,
  selectFilteredFavoriteRecipes,
} from "./favoriteRecipesSlice.js";

import unfavoriteIcon from "../../img/unfavorite.svg";

const { removeRecipe } = favoriteRecipesSlice.actions;
export const FavoriteRecipes = () => {
  const favoriteRecipes = useSelector(selectFilteredFavoriteRecipes);
  const dispatch = useDispatch();

  const onRemoveRecipeHandler = (recipe) => {
    dispatch(removeRecipe(recipe));
  };

  return (
    <div className="recipes-container">
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
